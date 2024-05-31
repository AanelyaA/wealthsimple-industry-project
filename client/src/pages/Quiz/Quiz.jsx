import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import qData from '../../../data/Flex-Quiz-Answer.json';
import './Quiz.scss';

const Quiz = () => {
    const [questions] = useState(qData.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [correctOption, setCorrectOption] = useState(questions[0].correct_answer);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const navigate = useNavigate();
  
    const handleOptionSelect = (key) => {
        setSelectedOption(key);
        setShowExplanation(true);
    };
  
    const handleNextQuestion = () => {
        setSelectedOption(null);
        setShowExplanation(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCorrectOption(questions[currentQuestionIndex + 1].correct_answer);
        setIsLastQuestion(currentQuestionIndex === questions.length - 2);
    };
  
    const renderQuizContent = () => {
        return (
            <>
                <div className="progress-bar">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                <QuizQuestion
                    question={questions[currentQuestionIndex]}
                    selectedOption={selectedOption}
                    onOptionSelect={handleOptionSelect}
                    showExplanation={showExplanation}
                    correctOption={correctOption}
                />
                {isLastQuestion ? (
                    <button onClick={() => {
                        alert('Quiz Completed!');
                        navigate("/profile")
                    }}>Check Result</button>
                ) : (
                    <button 
                        onClick={handleNextQuestion} 
                        disabled={selectedOption === null}
                    >
                        Next Question
                    </button>
                )}
            </>
        );
    };
  
    return <div className="quiz">{questions && questions.length > 0 && renderQuizContent()}</div>;
};

export default Quiz;
