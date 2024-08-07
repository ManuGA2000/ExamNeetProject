import React from 'react';
import './Add.css';

const SideBar = ({ selectedOptions, questions, currentQuestionIndex, onQuestionClick }) => {
  return (
    <div className="sidebar">
        <div className="section-container">
      <h2>Section one</h2>
      <div className="questions-info">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-info ${index === currentQuestionIndex ? 'active' : ''}`}
            onClick={() => onQuestionClick(index)}
          >
            <div className="question-header"> 
              <span className="question-number">{index + 1}</span>
              <div className="options-bubbles">
                {question.options.map((_, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`option-bubble ${selectedOptions[index] === optionIndex ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      checked={selectedOptions[index] === optionIndex}
                      readOnly
                    />
                    {String.fromCharCode(65 + optionIndex)}
                  </div> 
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SideBar;
 