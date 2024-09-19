import React from 'react';
import Calculator from './components/Calculator.tsx';
import Instructions from './components/Instructions.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Calculator />
      <Instructions />
    </div>
  );
}

export default App;