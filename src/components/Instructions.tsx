import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 max-h-[90vh] w-[80%] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Instructions:-</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">1. Time Limit:</h3>
            <p>You have a total of 3 hours to complete the exam. Ensure that you manage your time effectively to answer all questions within the allocated time frame.</p>
          </div>

          <div>
            <h3 className="font-semibold">2. Materials Needed:</h3>
            <ul className="list-disc ml-6">
              <li>Writing utensils (pen or pencil)</li>
              <li>Scratch paper (if allowed)</li>
              <li>Any permitted resources or materials specified in the exam instructions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">3. Technical Requirements:</h3>
            <ul className="list-disc ml-6">
              <li>Ensure a stable internet connection throughout the duration of the exam.</li>
              <li>Use a compatible device with a reliable web browser that supports the exam platform.</li>
              <li>Close all unnecessary tabs or applications to minimize distractions and optimize performance.</li>
              <li>Adjust your screen brightness and resolution for optimal visibility.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">4. Exam Environment:</h3>
            <ul className="list-disc ml-6">
              <li>Choose a quiet and well-lit room for taking the exam.</li>
              <li>Clear your workspace of any unauthorized materials or items not permitted for the exam.</li>
              <li>Maintain a tidy and organized area to facilitate focus and concentration.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">5. Identification:</h3>
            <ul className="list-disc ml-6">
              <li>Have a valid form of identification ready for verification purposes, as instructed by your proctor.</li>
              <li>Follow any additional identification procedures specified by your institution or exam provider.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">6. Exam Instructions:</h3>
            <ul className="list-disc ml-6">
              <li>Read each question carefully and thoroughly before answering.</li>
              <li>Pay attention to any specific instructions provided with each question.</li>
              <li>Ensure that you understand the format of each question type (e.g., multiple-choice, essay, short answer) before responding.</li>
              <li>Double-check your answers for accuracy and completeness before submitting.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">7. Communication:</h3>
            <ul className="list-disc ml-6">
              <li>Avoid communicating with other individuals during the exam unless permitted by the proctor.</li>
              <li>Refrain from using any unauthorized communication devices, including cell phones or messaging applications.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">8. Proctoring Assistance:</h3>
            <ul className="list-disc ml-6">
              <li>Contact your designated proctor immediately if you encounter any technical issues or require clarification on exam instructions.</li>
              <li>Follow proctoring guidelines and instructions provided throughout the exam session.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">9. Submission:</h3>
            <ul className="list-disc ml-6">
              <li>Submit your completed exam within the designated time limit.</li>
              <li>Ensure that all responses are saved and submitted before the exam deadline.</li>
              <li>Follow the specified submission process as instructed by your proctor or exam platform.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">10. Conclusion:</h3>
            <p>Once you have completed the exam, await further instructions from your proctor regarding next steps or any post-exam procedures.</p>
          </div>

          <div>
            <h3 className="font-semibold">11. Cheating and Academic Integrity:</h3>
            <p>Remember to uphold the principles of academic integrity throughout the exam. Any attempt to cheat or engage in dishonest behavior will result in consequences as outlined by your institution or exam provider.</p>
          </div>

          <div>
            <h3 className="font-semibold">12. Good Luck!:</h3>
            <p>We wish you the best of luck on your exam. Stay focused, remain calm, and do your best.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;