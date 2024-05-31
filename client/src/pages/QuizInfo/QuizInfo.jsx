import { Link, useParams  } from 'react-router-dom';
import './QuizInfo.scss';

const learningModules = [
    "Introduction to Budgeting",
    "Understanding Investments",
    "Saving Strategies",
    "Managing Debt Effectively",
    "Retirement Planning",
];

const QuizInfo = () => {
    const { quizId } = useParams();
    console.log(learningModules)

    return(
        <div className="quiz-info">
            <h1>{`${learningModules[quizId-1]}`}</h1>
            <p>GET 100 Points</p>
            <p>20 Question</p>
            <p>30 min</p>
            <p>Win 10 coins</p>
            <p>Please read the text below carefully so you can understand it</p>
            <ul>
                <li>10 points awarded for a correct answer and no marks for an incorrect answer</li>
                <li>Tap on options to select the correct answer</li>
                <li>Click next question until you completed all the questions</li>
            </ul>
            <Link className="quiz-btn" to={`/quiz/${quizId}/session`}>Start Quiz</Link>
        </div>
    )
};

export default QuizInfo;
