import { useState } from "react";
import "./ScaleQuestionnaire.scss";

export default function ScaleQuestionnaire() {
  const [scaleValue, setScaleValue] = useState(5);

  const handleSliderChange = (event) => {
    setScaleValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Selected scale value: ${scaleValue}`);
    // Add your submission logic here
  };

  return (
    <div className="scale-questionnaire">
      <h1>Rate your current financial situation</h1>
      <div className="scale-container">
        <input
          type="range"
          min="1"
          max="10"
          value={scaleValue}
          className="slider"
          onChange={handleSliderChange}
        />
        <div className="scale-labels">
          <span>1</span>
          <span>10</span>
        </div>
        <div className="scale-value">Current value: {scaleValue}</div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
