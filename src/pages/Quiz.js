import React, { useState } from 'react';

function Quiz() {
  // Questions for different categories
  const questions = {
    javascript: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A type of database",
          "A CSS framework",
          "A backend framework",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is JSX?",
        options: [
          "A JavaScript syntax extension",
          "A type of JSON",
          "A CSS preprocessor",
          "A backend language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which hook is used to manage state in functional components?",
        options: [
          "useEffect",
          "useState",
          "useContext",
          "useRef",
        ],
        correctAnswer: 1,
      },
    ],
    math: [
      {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 * 6?",
        options: ["72", "60", "66", "50"],
        correctAnswer: 0,
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
    ],
    english: [
      {
        question: "Which of the following is a synonym of 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctAnswer: 1,
      },
      {
        question: "Which word is spelled correctly?",
        options: ["Accomodate", "Accommodate", "Acommodate", "Acmodate"],
        correctAnswer: 1,
      },
      {
        question: "Which is the correct sentence?",
        options: [
          "I are going to the store.",
          "I is going to the store.",
          "I am going to the store.",
          "I going to the store.",
        ],
        correctAnswer: 2,
      },
    ],
    generalKnowledge: [
      {
        question: "Who is the current president of the United States?",
        options: ["Joe Biden", "Barack Obama", "Donald Trump", "George W. Bush"],
        correctAnswer: 0,
      },
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0,
      },
      {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
    ],
  };

  const [category, setCategory] = useState('javascript');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index) => {
    if (index === questions[category][currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[category].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-900">
      {/* Quiz Type and Category */}
      <h1 className="text-3xl font-bold mb-6">Take the {category.charAt(0).toUpperCase() + category.slice(1)} Quiz</h1>
      
      {!showScore ? (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1} of {questions[category].length}</h2>
          <p className="mb-4 text-lg">{questions[category][currentQuestion].question}</p>
          <ul>
            {questions[category][currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className="p-2 bg-gray-200 rounded-md mb-2 cursor-pointer hover:bg-gray-300"
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-lg mb-6">
            You scored {score} out of {questions[category].length}.
          </p>
          <button
            onClick={() => {
              setShowScore(false);
              setScore(0);
              setCurrentQuestion(0);
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Retake Quiz
          </button>
        </div>
      )}

      {/* Category Selection */}
      <div className="mt-6 text-center">
        <button onClick={() => setCategory('javascript')} className="bg-blue-500 text-white py-2 px-4 rounded mx-2">
          JavaScript
        </button>
        <button onClick={() => setCategory('math')} className="bg-blue-500 text-white py-2 px-4 rounded mx-2">
          Math
        </button>
        <button onClick={() => setCategory('english')} className="bg-blue-500 text-white py-2 px-4 rounded mx-2">
          English
        </button>
        <button onClick={() => setCategory('generalKnowledge')} className="bg-blue-500 text-white py-2 px-4 rounded mx-2">
          General Knowledge
        </button>
      </div>
    </div>
  );
}

export default Quiz;
