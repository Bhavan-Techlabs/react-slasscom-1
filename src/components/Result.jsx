import React from 'react';

function Result({ score, totalQuestions, onRestart }) {
    return (
        <>
            <div className="score-section">
                <h3>
                    You scored {score} out of {totalQuestions}
                </h3>
                <div>
                    <button onClick={() => onRestart()}>Restart</button>
                </div>
            </div>
        </>
    );
}

export default Result;
