import React from 'react';

const QuizBox = ({ questions, currentQuestionIndex, onAnswerClick }) => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <div className="question-section">
                <div className="question-count">
                    <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{currentQuestion.question}</div>
            </div>
            <div className="answer-section">
                {currentQuestion.answers.map((answer, i) => (
                    <button onClick={() => onAnswerClick(currentQuestion, answer)} key={i}>
                        {answer}
                    </button>
                ))}
            </div>
        </>
    );
};

export default QuizBox;
