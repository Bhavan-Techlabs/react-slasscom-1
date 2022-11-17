import React, { useEffect, useState } from 'react';

import Result from './components/Result';
import QuizBox from './components/QuizBox';
import Loading from './components/Loading';

import './style.css';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const getData = async () => {
    const data = await fetch('data.json');
    const response = await data.json();
    setQuestions(response.questions);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAnswerOption = (currentQuestion, answer) => {
    if (currentQuestion.answers[currentQuestion.correctAnswer] === answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  return (
    <div className="app">
      {showResults ? (
        <Result
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        <>
          {questions.length > 0 ? (
            <QuizBox
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              onAnswerClick={handleAnswerOption}
            />
          ) : (
            <Loading />
          )}
        </>
      )}
    </div>
  );
}
