import { useState } from "react";
import "./PersonalisedQuestionnaire.scss";
import Checkbox from "../../assets/icons/checkbox.svg";
import CheckboxChecked from "../../assets/icons/checkbox-checked.svg";

export default function PersonalisedQuestionnaire() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Budgeting", "Saving", "Debt Management", "Investments", "Retirement"];

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="questionnaire">
      <h1 className="questionnaire__title">
        What are you interested in learning about?
      </h1>
      <div className="questionnaire__options">
        {options.map((option) => (
          <label
            key={option}
            className={`questionnaire__option ${
              selectedOptions.includes(option) ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            <img
              src={
                selectedOptions.includes(option) ? CheckboxChecked : Checkbox
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
