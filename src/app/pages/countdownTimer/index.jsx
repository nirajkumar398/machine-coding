import React, { useState, useEffect } from "react";
import "./style.css";

const CountdownTimer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && (hours > 0 || minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    } else if (isActive && hours === 0 && minutes === 0 && seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds]);

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsActive(!isActive);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div className="countdown-container">
      {isActive ? (
        <div className="timer-display">
          <h1>
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h1>
        </div>
      ) : (
        <div className="time-inputs">
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value.slice(0, 2))}
            placeholder="HH"
            maxLength={2}
          />
          <span>:</span>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
            placeholder="MM"
            maxLength={2}
          />
          <span>:</span>
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value.slice(0, 2))}
            placeholder="SS"
            maxLength={2}
          />
        </div>
      )}

      <div className="controls">
        <button onClick={handleStart}>
          {isActive && (seconds > 0 || minutes > 0 || hours > 0)
            ? "Pause"
            : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
