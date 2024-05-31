import React from 'react';
import Lottie from 'lottie-react';
import celebrationAnimation from '../../assets/animations/coin.json';
import encouragementAnimation from '../../assets/animations/encouragement.json';
import './QuizQuestion.scss';

const QuizQuestion = ({ question, selectedOption, onOptionSelect, showExplanation, correctOption }) => {
    const optionLabels = ['A', 'B', 'C', 'D'];
  
    return (
      <div className="quiz-question">
        <h2>{question.question}</h2>
        <ul>
          {Object.entries(question.options).map(([key, value], index) => (
            <li
              key={key}
              className={`option 
                ${selectedOption === key ? (selectedOption === correctOption ? 'correct' : 'incorrect') : ''}
                ${showExplanation && key === correctOption ? 'correct' : ''}
              `}
              onClick={() => onOptionSelect(key)}
            >
              {`${optionLabels[index]}. ${value}`}
            </li>
          ))}
        </ul>
        {showExplanation && (
          <div className="animation-container">
            {selectedOption === correctOption ? (
              <Lottie animationData={celebrationAnimation} height={50} width={50} />
            ) : (
              <Lottie animationData={encouragementAnimation} height={50} width={50} />
            )}
          </div>
        )}
        {showExplanation && <p className="explanation">{question.explanation}</p>}
      </div>
    );
  };
  
  export default QuizQuestion;
