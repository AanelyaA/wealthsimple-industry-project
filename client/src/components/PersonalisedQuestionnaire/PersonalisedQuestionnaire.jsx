import { useState } from "react";
import "./PersonalisedQuestionnaire.scss";
import Checkbox from "../../assets/icons/checkbox.svg";
import CheckboxChecked from "../../assets/icons/checkbox-checked.svg";

const courseTopics = [
  { id: 1, title: "Introduction to Budgeting" },
  { id: 2, title: "Understanding Investments" },
  { id: 3, title: "Saving Strategies" },
  { id: 4, title: "Managing Debt Effectively" },
  { id: 5, title: "Retirement Planning" },
];

export default function PersonalisedQuestionnaire() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (id) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="questionnaire">
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
      <button className="questionnaire__submit">Continue</button>
    </div>
  );
}
