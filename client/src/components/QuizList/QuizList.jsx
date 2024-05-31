import { useState, useEffect } from 'react';
import './QuizList.scss';

const learningModules = [
    { id: 1, title: 'Introduction to Budgeting'},
    { id: 2, title: 'Understanding Investments' },
    { id: 3, title: 'Saving Strategies'},
    { id: 4, title: 'Managing Debt Effectively'},
    { id: 5, title: 'Retirement Planning' }
];
const QuizList = () => {
        const [recommendedModules, setRecommendedModules] = useState([]);
        useEffect(() => {
            const filteredModules = learningModules.filter(module => module.level);
            setRecommendedModules(filteredModules);
        }, []);
        return (
            <div className="learning-path">
                <h2>Earn to Learn</h2>
                {recommendedModules.length > 0 ? (
                    <ul>
                        {recommendedModules.map(module => (
                            <li key={module.id}>{module.title} Test</li>
                        ))}
                    </ul>
                ) : (
                    <p>Selected Quizzes</p>
                )}
            </div>
        );
    };

export default QuizList;