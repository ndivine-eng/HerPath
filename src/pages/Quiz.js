import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();

  const questions = {
    javascript: [
      { question: "What is React?", options: ["A JavaScript library for building user interfaces", "A type of database", "A CSS framework", "A backend framework"], correctAnswer: 0 },
      { question: "What is JSX?", options: ["A JavaScript syntax extension", "A type of JSON", "A CSS preprocessor", "A backend language"], correctAnswer: 0 },
      { question: "Which hook is used to manage state in functional components?", options: ["useEffect", "useState", "useContext", "useRef"], correctAnswer: 1 },
    ],
    math: [
      { question: "What is 5 + 3?", options: ["5", "8", "10", "7"], correctAnswer: 1 },
      { question: "What is 12 * 6?", options: ["72", "60", "66", "50"], correctAnswer: 0 },
      { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
    ],
    english: [
      { question: "Which of the following is a synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correctAnswer: 1 },
      { question: "Which word is spelled correctly?", options: ["Accomodate", "Accommodate", "Acommodate", "Acmodate"], correctAnswer: 1 },
      { question: "Which is the correct sentence?", options: ["I are going to the store.", "I is going to the store.", "I am going to the store.", "I going to the store."], correctAnswer: 2 },
    ],
    generalKnowledge: [
      { question: "Who is the current president of the United States?", options: ["Joe Biden", "Barack Obama", "Donald Trump", "George W. Bush"], correctAnswer: 0 },
      { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: 0 },
      { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: 3 },
    ],
  };

  const [category, setCategory] = useState('javascript');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [categoryScore, setCategoryScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);  // Store user answers
  const [showScore, setShowScore] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);  // Show correct answers flag

  const totalQuestions = {
    javascript: questions.javascript.length,
    math: questions.math.length,
    english: questions.english.length,
    generalKnowledge: questions.generalKnowledge.length,
  };

  const handleAnswerClick = (index) => {
    setUserAnswers([...userAnswers, index]); // Save the user's answer
    if (index === questions[category][currentQuestion].correctAnswer) {
      setCategoryScore(categoryScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[category].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const getImprovementFeedback = (category) => {
    const score = categoryScore;
    const total = totalQuestions[category];
    const feedback = [];

    if (score < total / 2) {
      feedback.push(`You need to improve your ${category} skills.`);
    } else {
      feedback.push(`Well done! You have a good grasp of ${category}.`);
    }

    return feedback;
  };

  const resetQuiz = () => {
    setShowScore(false);
    setShowCorrectAnswers(false);
    setCategoryScore(0);
    setCurrentQuestion(0);
    setUserAnswers([]);  // Reset user answers
  };

  const progress = ((currentQuestion + 1) / questions[category].length) * 100;  // Calculate progress

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Take the {category.charAt(0).toUpperCase() + category.slice(1)} Quiz</h1>

      {!showScore ? (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="text-sm font-semibold mb-2">Progress: {Math.round(progress)}%</div>
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

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
            You scored {categoryScore} out of {questions[category].length}.
          </p>
          <h2 className="text-xl font-semibold mb-4">Areas to Improve:</h2>
          <ul>
            {getImprovementFeedback(category).map((item, index) => (
              <li key={index} className="text-md text-red-600">{item}</li>
            ))}
          </ul>
          
          {/* Show Correct Answers */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Correct Answers:</h2>
            <ul>
              {questions[category].map((question, idx) => (
                <li key={idx} className="mb-4">
                  <div className="font-bold">{question.question}</div>
                  <div className="text-sm text-gray-700">Your Answer: {question.options[userAnswers[idx]]}</div>
                  <div className="text-sm text-green-600">Correct Answer: {question.options[question.correctAnswer]}</div>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 mr-4"
          >
            Retake Quiz
          </button>
          <button
            onClick={goToDashboard}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
          >
            Back to Dashboard
          </button>
        </div>
      )}

      <div className="mt-6 text-center">
        <button onClick={() => { resetQuiz(); setCategory('javascript'); }} className={`bg-blue-500 text-white py-2 px-4 rounded mx-2 ${category === 'javascript' ? 'bg-blue-700' : ''}`}>
          JavaScript
        </button>
        <button onClick={() => { resetQuiz(); setCategory('math'); }} className={`bg-blue-500 text-white py-2 px-4 rounded mx-2 ${category === 'math' ? 'bg-blue-700' : ''}`}>
          Math
        </button>
        <button onClick={() => { resetQuiz(); setCategory('english'); }} className={`bg-blue-500 text-white py-2 px-4 rounded mx-2 ${category === 'english' ? 'bg-blue-700' : ''}`}>
          English
        </button>
        <button onClick={() => { resetQuiz(); setCategory('generalKnowledge'); }} className={`bg-blue-500 text-white py-2 px-4 rounded mx-2 ${category === 'generalKnowledge' ? 'bg-blue-700' : ''}`}>
          General Knowledge
        </button>
      </div>
    </div>
  );
}

export default Quiz;
