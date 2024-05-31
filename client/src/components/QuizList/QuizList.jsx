import { useState, useEffect } from 'react';
import './QuizList.scss';

const learningModules = [
    { id: 1, title: 'Introduction to Budgeting', level: 'beginner' },
    { id: 2, title: 'Understanding Investments', level: 'beginner' },
    { id: 3, title: 'Advanced Investment Strategies', level: 'advanced' },
    { id: 4, title: 'Managing Debt Effectively', level: 'intermediate' },
    { id: 5, title: 'Retirement Planning', level: 'advanced' }
];
const QuizList = ({ userLevel }) => {
        const [recommendedModules, setRecommendedModules] = useState([]);
        useEffect(() => {
            const filteredModules = learningModules.filter(module => module.level === userLevel);
            setRecommendedModules(filteredModules);
        }, [userLevel]);
        return (
            <div className="learning-path">
                <h2>Learn to Earn</h2>
                {recommendedModules.length > 0 ? (
                    <ul>
                        {recommendedModules.map(module => (
                            <li key={module.id}>{module.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No modules available for your level.</p>
                )}
            </div>
        );
    };

export default QuizList;