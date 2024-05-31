import { useState } from "react";
import "./PersonalisedQuestionnaire.scss";
import Checkbox from "../../assets/icons/checkbox.svg";
import CheckboxChecked from "../../assets/icons/checkbox-checked.svg";
import BackArrow from "../../assets/icons/arrow_back_24dp.svg"
import { Link, useNavigate } from "react-router-dom";

const courseTopics = [
  { id: 1, title: "Introduction to Budgeting" },
  { id: 2, title: "Understanding Investments" },
  { id: 3, title: "Saving Strategies" },
  { id: 4, title: "Managing Debt Effectively" },
  { id: 5, title: "Retirement Planning" },
];

export default function PersonalisedQuestionnaire() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleOptionClick = (id) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = () => {
    navigate(`/quizzes`, { state: { selectedOptions } });
  };

  return (
    <div className="questionnaire">
      <div className="questionnaire__controls">
        <Link to="/scale">
          <img
            src={BackArrow}
            alt="back arrow"
            className="questionnaire__arrow"
          />
        </Link>
        <h4 className="questionnaire__heading">Choose your interests</h4>
      </div>
      <h1 className="questionnaire__title">
        What are you interested in learning about?
      </h1>
      <div className="questionnaire__options">
        {courseTopics.map((course) => (
          <label
            key={course.id}
            className={`questionnaire__option ${
              selectedOptions.includes(course.id) ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(course.id)}
          >
            {course.title}
            <img
              src={
                selectedOptions.includes(course.id) ? CheckboxChecked : Checkbox
              }
              alt="checkbox"
              className="questionnaire__checkbox-icon"
            />
          </label>
        ))}
      </div>
      <button
        className={`questionnaire__submit ${
          selectedOptions.length > 0 ? "questionnaire__submit-active" : ""
        }`}
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
}
