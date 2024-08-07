import React from 'react';
import { useLocation } from 'react-router-dom';
import Latex from 'react-latex-next';
import './Results.css'; // Import the CSS file

const Results = () => {
  const location = useLocation();
  const { selectedOptions, questions } = location.state || {}; // Destructure received data

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let totalScore = 0;

    if (questions && selectedOptions) {
      questions.forEach((question, index) => {
        if (selectedOptions[index] === null) {
          skipped++;
        } else if (selectedOptions[index] === question.correctAnswer) {
          correct++;
          totalScore += 2; // Assuming correct answer gives 2 points
        } else {
          wrong++;
          totalScore += 0.66; // Assuming wrong answer gives 0.66 points
        }
      });
    }

    return { correct, wrong, skipped, totalScore };
  };

  const { correct, wrong, skipped, totalScore } = calculateResults();
  const totalQuestions = questions ? questions.length : 0;
  const totalScorePercentage = totalQuestions ? ((correct / totalQuestions) * 100).toFixed(2) : 0;

  return (
    <>
      <div className="logo-top">
        <img
          src="https://play-lh.googleusercontent.com/8kJoKhrIJV8ml9ru61THWQIvx2AUlw0MX5Xa2SF9FHcLdLN4lmTKF-CV7U-HANadrts"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="results-container">
        <h2>Thank you for taking the test. Your test results are here:</h2>
        <table className="results-table">
          <thead>
            <tr>
              <th>Response</th>
              <th>Questions</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Correct</td>
              <td>{correct}</td>
              <td>{correct * 2}</td>
            </tr>
            <tr>
              <td>Wrong</td>
              <td>{wrong}</td>
              <td>{(wrong * 0.66).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Skipped</td>
              <td>{skipped}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Total Score</td>
              <td>{totalScorePercentage} %</td>
              <td>{totalScore.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <h1>Question analysis</h1>
        {questions && selectedOptions ? (
          questions.map((question, index) => (
            <div key={index} className="question-summary">
              <h3>
                Q{index + 1}. <Latex>{question.text}</Latex>
              </h3>
              {question.image && (
                <img
                  src={question.image}
                  alt={`Question ${index + 1}`}
                  className="question-image"
                />
              )}
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`option ${
                      selectedOptions[index] === optionIndex
                        ? optionIndex === question.correctAnswer
                          ? 'correct'
                          : 'selected'
                        : ''
                    }`}
                  >
                    <Latex>{option.content}</Latex>
                    {option.image && (
                      <img
                        src={option.image}
                        alt={`Option ${String.fromCharCode(65 + optionIndex)}`}
                        className="option-image"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="summary-text">
                {selectedOptions[index] === null ? (
                  <span className="skipped">You skipped this question</span>
                ) : selectedOptions[index] === question.correctAnswer ? (
                  <span className="correct">Your answer is correct</span>
                ) : (
                  <span className="incorrect">Your answer is incorrect</span>
                )}
              </p>
              <p className="correct-answer">
                Correct answer: {String.fromCharCode(65 + question.correctAnswer)}
              </p>
            </div>
          ))
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </>
  );
};

export default Results;
