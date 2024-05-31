import { useState } from "react";
import "./ScaleQuestionnaire.scss";

export default function ScaleQuestionnaire() {
  const [scaleValue, setScaleValue] = useState(5);

  const handleSliderChange = (event) => {
    setScaleValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Selected scale value: ${scaleValue}`);
  };

  return (
    <div className="scale-questionnaire">
      <h1 className="scale-questionnaire__title">
        Rate your current financial situation
      </h1>
      <div className="scale-questionnaire__container">
        <input
          type="range"
          min="1"
          max="10"
          value={scaleValue}
          className="scale-questionnaire__slider"
          onChange={handleSliderChange}
        />
        <div className="scale-questionnaire__labels">
          <span>1</span>
          <span>10</span>
        </div>
        <div className="scale-questionnaire__value">
          Current value: {scaleValue}
        </div>
      </div>
      <button className="scale-questionnaire__button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
