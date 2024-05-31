import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./QuizList.scss";
import icon from "../../assets/icons/arrow_back_24dp.svg";
import tldr from "../../assets/images/tldr.png"

const learningModules = [
  { id: 1, title: "Introduction to Budgeting" },
  { id: 2, title: "Understanding Investments" },
  { id: 3, title: "Saving Strategies" },
  { id: 4, title: "Managing Debt Effectively" },
  { id: 5, title: "Retirement Planning" },
];

const QuizList = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.selectedOptions) {
      const filteredModules = learningModules.filter((module) =>
        location.state.selectedOptions.includes(module.id)
      );
      setSelectedModules(filteredModules);
    }
  }, [location.state]);

  return (
    <>
      <div className="quizzes">
        <h2 className="quizzes__header">Learn to Earn !</h2>
        <div className="quizzes__sub-block">
          <p className="quizzes__sub"> Select a quiz to earn reward points</p>
        </div>
        {selectedModules.length > 0 ? (
          <ul className="quizzes__list">
            {selectedModules.map((module) => (
              <li className="quizzes__item" key={module.id}>
                <a className="quizzes__link" href={`/quiz/${module.id}`}>
                  {module.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="quizzes__return">
            <a className="quizzes__link" href={`/welcome`}>
              <img src={icon} alt="return" />
            </a>
            <p>You haven't selected any modules! Go back and select! </p>

          </div>
        )}
      </div>

      <div>
            <img className="quizzes__tldr" src={tldr} alt="wealthsimple-image"/>

      </div>
    </>
  );
};

export default QuizList;
