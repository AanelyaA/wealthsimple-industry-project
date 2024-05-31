import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScaleQuestionnaire.scss";

export default function ScaleQuestionnaire() {
  const [scaleValue, setScaleValue] = useState(5);
  const navigate = useNavigate();

  const handleSliderChange = (value) => {
    setScaleValue(value);
  };

  const handleSubmit = () => {
    navigate(`/welcome2`);
  };

  const scaleBars = [];
  for (let value = 1; value <= 10; value++) {
    scaleBars.push(
      <div
        key={value}
        className={`scale-questionnaire__bar ${
          scaleValue === value ? "selected" : ""
        }`}
        onClick={() => handleSliderChange(value)}
      ></div>
    );
  }

  return (
    <div className="scale-questionnaire">
      <h1 className="scale-questionnaire__title">
        Help us understand your financial situation
      </h1>

      <h3 className="scale-questionnaire__subtitle">
        How would you rate your level of financial literacy on a scale from 1 to
        10, with 1 indicating the lowest and 10 indicating the highest?
      </h3>
      <div className="scale-questionnaire__container">
        <div className="scale-questionnaire__line">{scaleBars}</div>
        <div className="scale-questionnaire__labels">
          <span>1</span>
          <span>10</span>
        </div>
        <div className="scale-questionnaire__value">
          You have selected: {scaleValue}
        </div>
      </div>
      <button className="scale-questionnaire__button" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
}
