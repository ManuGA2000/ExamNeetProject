import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax-preview';
import Sidebar from './SideBar';
import Time from './Time';
import { useNavigate } from 'react-router-dom';

const AddExam = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const questions = [
    {
      text: "1. What is the primary function of the enzyme amylase?",
      options: [
        { type: 'text', content: "A. Breaks down proteins" },
        { type: 'text', content: "B. Breaks down fats" },
        { type: 'text', content: "C. Breaks down carbohydrates" },
        { type: 'text', content: "D. Breaks down nucleic acids" }
      ],
      correctAnswer: 2
    },
    {
      text: "2. Solve the equation: \\( \\frac{2x+3}{4} = \\frac{5x-1}{3} \\)",
      options: [
        { type: 'latex', content: "A. \\( \\frac{5}{11} \\)" },
        { type: 'latex', content: "B. \\( \\frac{11}{5} \\)" },
        { type: 'latex', content: "C. \\( \\frac{7}{13} \\)" },
        { type: 'latex', content: "D. \\( \\frac{13}{7} \\)" }
      ],
      correctAnswer: 1
    },
    {
      text: "3. Identify the structure shown in the image.",
      image: "https://img.freepik.com/free-photo/3d-medical-background-with-virus-cells_1048-8980.jpg?t=st=1722322051~exp=1722325651~hmac=621cc3f56e093cf42964d76a565ab466d5d4837bff8677f000d8bb24435908f3&w=740",
      options: [
        { type: 'text', content: "A. Mitochondria" },
        { type: 'text', content: "B. Nucleus" },
        { type: 'text', content: "C. Ribosome" },
        { type: 'text', content: "D. Chloroplast" }
      ],
      correctAnswer: 0
    },
    {
      text: "4. Which of the following vitamins is water-soluble?",
      options: [
        { type: 'text', content: "A. Vitamin A" },
        { type: 'text', content: "B. Vitamin D" },
        { type: 'text', content: "C. Vitamin C" },
        { type: 'text', content: "D. Vitamin K" }
      ],
      correctAnswer: 2
    },
    {
      text: "5. Which gas is most abundant in the Earth's atmosphere?",
      options: [
        { type: 'text', content: "A. Oxygen" },
        { type: 'text', content: "B. Nitrogen" },
        { type: 'text', content: "C. Carbon Dioxide" },
        { type: 'text', content: "D. Hydrogen" }
      ],
      correctAnswer: 1
    },
    {
      text: "6. What is the balanced chemical equation for the reaction of hydrochloric acid with sodium hydroxide?",
      options: [
        { type: 'latex', content: "A. \\( \\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} \\)" },
        { type: 'latex', content: "B. \\( \\text{H}_2\\text{SO}_4 + \\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + \\text{H}_2\\text{O} \\)" },
        { type: 'latex', content: "C. \\( \\text{H}_2\\text{O}_2 + \\text{NaOH} \\rightarrow \\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\)" },
        { type: 'latex', content: "D. \\( \\text{H}_3\\text{PO}_4 + \\text{NaOH} \\rightarrow \\text{Na}_3\\text{PO}_4 + \\text{H}_2\\text{O} \\)" }
      ],
      correctAnswer: 0
    },
    {
      text: "7. Identify the product of the following chemical reaction: \\( \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\)",
      options: [
        { type: 'text', content: "A. Water and Oxygen" },
        { type: 'text', content: "B. Carbon Dioxide and Water" },
        { type: 'text', content: "C. Glucose and Oxygen" },
        { type: 'text', content: "D. Carbon Dioxide and Glucose" }
      ],
      correctAnswer: 1
    },
    {
      text: "8. Identify the chemical structure shown in the image.",
      image: "https://img.freepik.com/free-photo/3d-medical-background-with-close-up-fictional-virus-cells_1048-8469.jpg?t=st=1722321313~exp=1722324913~hmac=5dc557fca113aa4b3be04d32743885d971a15d4109efc7cceb45e17007623793&w=740",
      options: [
        { type: 'image', content: "https://img.freepik.com/free-photo/3d-medical-background-with-close-up-fictional-virus-cells_1048-8469.jpg?t=st=1722321313~exp=1722324913~hmac=5dc557fca113aa4b3be04d32743885d971a15d4109efc7cceb45e17007623793&w=740" },
        { type: 'image', content: "https://img.freepik.com/free-photo/3d-render-medical-background-with-abstract-covid-19-virus-cells-dna-strands_1048-14543.jpg?t=st=1722322017~exp=1722325617~hmac=02f8eb34446c3d3b6edb43019104f2e5df72012634c5fcbdbf8e502883591aa6&w=900" },
        { type: 'image', content: "https://img.freepik.com/free-photo/3d-medical-background-with-virus-cells_1048-8980.jpg?t=st=1722322051~exp=1722325651~hmac=621cc3f56e093cf42964d76a565ab466d5d4837bff8677f000d8bb24435908f3&w=740" },
        { type: 'image', content: "https://img.freepik.com/free-photo/3d-render-medical-background-with-virus-cells_1048-13121.jpg?t=st=1722322076~exp=1722325676~hmac=4d5b66c92aeb16d0d15d21263161be16f7c1fe736b3f47fd75ffb530f66e180e&w=900" }
      ],
      correctAnswer: 2
    }
  ];

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleEndTest = () => {
    setIsSubmitted(true);
    navigate('/results', { state: { selectedOptions, questions } });
  };

  const getOptionClass = (questionIndex, optionIndex) => {
    if (!isSubmitted) return "option";
    if (optionIndex === questions[questionIndex].correctAnswer) return "option correct";
    if (optionIndex === selectedOptions[questionIndex]) return "option incorrect";
    return "option";
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isSubmitted) {
        e.preventDefault();
        e.returnValue = ''; // Standard way to show a browser warning message
      }
    };

    const handlePopState = () => {
      if (!isSubmitted) {
        alert('You need to end the test before leaving.');
        handleEndTest();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isSubmitted]);

  return (
    <div className="App">
      <div className="header-top">
        <img
          src="https://play-lh.googleusercontent.com/8kJoKhrIJV8ml9ru61THWQIvx2AUlw0MX5Xa2SF9FHcLdLN4lmTKF-CV7U-HANadrts"
          alt=""
          className="logo"
        />
        <div className="time">
          <header className="time-header">
            <Time initialMinutes={1} initialSeconds={0} />
          </header>
        </div>
        <button onClick={handleEndTest} className="end-test-button">
          End Test
        </button>
      </div>
      <header className="App-header">
        <h1 className="info">NEET Exam</h1>
        <div className="questions-container">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-container">
              <h2>
                {question.text.includes("\\(") ? (
                  <MathJax math={question.text} />
                ) : (
                  question.text
                )}
              </h2>
              {question.image && (
                <img
                  src={question.image}
                  alt="Question related visual"
                  className="question-image"
                />
              )}
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={getOptionClass(questionIndex, optionIndex)}
                    onClick={() => handleOptionChange(questionIndex, optionIndex)}
                  >
                    <input
                      type="radio"
                      name={`option-${questionIndex}`}
                      checked={selectedOptions[questionIndex] === optionIndex}
                      onChange={() => handleOptionChange(questionIndex, optionIndex)}
                      disabled={isSubmitted}
                    />
                    {option.type === 'latex' ? (
                      <label>
                        <MathJax math={option.content} />
                      </label>
                    ) : option.type === 'image' ? (
                      <label>
                        <img
                          src={option.content}
                          alt="Option"
                          className="option-image"
                        />
                      </label>
                    ) : (
                      <label>{option.content}</label>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* {isSubmitted && (
          <div className="results">
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="result">
                <p>
                  {selectedOptions[questionIndex] === question.correctAnswer
                    ? `Question ${questionIndex + 1}: Correct!`
                    : `Question ${questionIndex + 1}: Incorrect. The correct answer is ${question.options[question.correctAnswer].content
                    }.`}
                </p>
                {question.image && <img src={question.image} alt="Question related visual" className="question-image" />}
                {question.text.includes("\\(") ? (
                  <MathJax math={question.text} />
                ) : (
                  <p>{question.text}</p>
                )}
              </div>
            ))}
          </div>
        )} */}
        <Sidebar
          selectedOptions={selectedOptions}
          questions={questions}
        />
      </header>
    </div>
  );
};

export default AddExam;
