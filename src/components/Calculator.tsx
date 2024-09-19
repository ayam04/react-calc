"use client"

import React from 'react'
import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [history, setHistory] = useState<string[]>([])
  const [currentCalculation, setCurrentCalculation] = useState('')

  const handleClick = (value: string) => {
    if (display === '0' && value !== '.') {
      setDisplay(value)
    } else {
      setDisplay(prev => prev + value)
    }
    setCurrentCalculation(prev => prev + value)
  }

  const handleOperation = (operation: string) => {
    setCurrentCalculation(prev => prev + operation)
    setDisplay('0')
  }

  const handleClear = () => {
    setDisplay('0')
    setCurrentCalculation('')
  }

  const handleBackspace = () => {
    setDisplay(prev => prev.slice(0, -1) || '0')
    setCurrentCalculation(prev => prev.slice(0, -1))
  }

  const handleEquals = () => {
    try {
      const result = eval(currentCalculation).toString()
      setDisplay(result)
      setHistory(prev => [currentCalculation + ' = ' + result, ...prev.slice(0, 4)])
      setCurrentCalculation(result)
    } catch (error) {
      setDisplay('Error')
    }
  }

  const handleClearEntry = () => {
    setDisplay('0')
    setCurrentCalculation(prev => {
      const lastOperatorIndex = Math.max(
        prev.lastIndexOf('+'),
        prev.lastIndexOf('-'),
        prev.lastIndexOf('*'),
        prev.lastIndexOf('/')
      )
      return prev.slice(0, lastOperatorIndex + 1)
    })
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-gray-100 rounded-xl shadow-lg flex">
      <div className="flex-1 mr-4">
        <div className="bg-white p-4 rounded-lg mb-4 text-right text-3xl font-semibold">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '4', '5', '6', '1', '2', '3'].map(num => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-white p-4 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick('0')}
            className="bg-white p-4 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-colors col-span-2"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="bg-gray-400 p-4 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            ←
          </button>
          {['+', '-', '*', '/'].map(op => (
            <button
              key={op}
              onClick={() => handleOperation(op)}
              className="bg-orange-300 p-4 rounded-lg text-xl font-semibold hover:bg-orange-400 transition-colors"
            >
              {op}
            </button>
          ))}
          <button
            onClick={handleEquals}
            className="bg-orange-500 p-4 rounded-lg text-xl font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            =
          </button>
          <button
            onClick={handleClearEntry}
            className="bg-red-500 p-4 rounded-lg text-xl font-semibold text-white hover:bg-red-600 transition-colors"
          >
            CE
          </button>
        </div>
      </div>
      <div className="w-64 bg-white p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">History</h3>
        {history.length > 0 ? (
          <ul className="space-y-1">
            {history.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No history yet</p>
        )}
      </div>
    </div>
  )
}