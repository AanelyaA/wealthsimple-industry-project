import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './QuizList.scss';

const learningModules = [
    { id: 1, title: 'Introduction to Budgeting'},
    { id: 2, title: 'Understanding Investments' },
    { id: 3, title: 'Saving Strategies'},
    { id: 4, title: 'Managing Debt Effectively'},
    { id: 5, title: 'Retirement Planning' }
];

const QuizList = () => {
    const [selectedModules, setSelectedModules] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.selectedOptions) {
            const filteredModules = learningModules.filter(module => 
                location.state.selectedOptions.includes(module.id)
            );
            setSelectedModules(filteredModules);
        }
    }, [location.state]);

    return (
        <div className="learning-path">
            <h2>Selected Quizzes</h2>
            {selectedModules.length > 0 ? (
                <ul>
                    {selectedModules.map(module => (
                        <li key={module.id}>
                            <a href={`/quiz/${module.id}`}>{module.title}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No quizzes selected - go back and select! </p>
            )}
        </div>
    );
};

export default QuizList;