import React, { useState } from 'react';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'India', 'South Korea'],
      correctAnswer: 'Japan'
    },
  ];

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {showResult ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
            <p className="mb-4">You scored {score} out of {questions.length}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <ul className="mb-4">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className="bg-gray-200 rounded-md p-2 mb-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

