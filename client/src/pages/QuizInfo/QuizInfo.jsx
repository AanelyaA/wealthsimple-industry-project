import React from 'react';
import { Link } from 'react-router-dom';
import './QuizInfo.scss';

const QuizInfo = () => {
    return(
        <div className="quiz-info">
            <h1>UI UX Design Quiz</h1>
            <p>GET 100 Points</p>
            <p>10 Question</p>
            <p>1 hour 15 min</p>
            <p>Win 10 star</p>
            <p>Please read the text below carefully so you can understand it</p>
            <ul>
                <li>10 points awarded for a correct answer and no marks for an incorrect answer</li>
                <li>Tap on options to select the correct answer</li>
                <li>Tap on the bookmark icon to save interesting questions</li>
                <li>Click submit if you are sure you want to complete all the quizzes</li>
            </ul>
            <Link to="/quiz">Start Quiz</Link>
        </div>
    )
};

export default QuizInfo;
