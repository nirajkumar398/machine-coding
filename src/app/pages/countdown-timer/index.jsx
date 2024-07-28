import { useEffect, useState } from "react";
import "./style.css";
const CountdownTimer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isActive && seconds == 0 && minutes == 0 && hours == 0) {
      handleReset();
    } else if (isActive && (seconds > 0 || minutes > 0 || hours > 0)) {
      intervalId = setInterval(() => {
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
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds, minutes, hours]);
  const handleStartPause = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      if (seconds > 0 || minutes > 0 || hours > 0) {
        formateTimer();
        setIsActive(true);
      }
    }
  };

  const formateTimer = () => {
    let secondsValue = seconds;
    let minutesValue = minutes;
    let hoursValue = hours;
    if (secondsValue > 60) {
      minutesValue += Math.floor(secondsValue / 60);
      secondsValue = secondsValue % 60;
    }
    if (secondsValue > 60) {
      hoursValue += Math.floor(minutesValue / 60);
      minutesValue = minutesValue % 60;
    }
    setSeconds(secondsValue);
    setMinutes(minutesValue);
    setHours(hoursValue);
    console.log("hours---", hoursValue);
  };
  const handleReset = () => {
    setSeconds("");
    setMinutes("");
    setHours("");
    setIsActive(false);
  };
  return (
    <div className="countdown-container-wrapper">
        <div className="countdown-container">
      <h1>Countdown Timer</h1>
      {isActive ? (
        <div className="timer-display">
          <h1>
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h1>
        </div>
      ) : (
        <div className="countdown-timer">
          <input
            placeholder="HH"
            type="number"
            maxLength={2}
            value={hours}
            onChange={(e) => setHours(e.target.value.slice(0, 2))}
          />
          <span>:</span>
          <input
            placeholder="MM"
            type="number"
            maxLength={2}
            value={minutes}
            onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
          />
          <span>:</span>
          <input
            placeholder="SS"
            type="number"
            maxLength={2}
            value={seconds}
            onChange={(e) => setSeconds(e.target.value.slice(0, 2))}
          />
        </div>
      )}
      <div className="countdown-button">
        <button className="countdown-button-start" onClick={handleStartPause}>
          {!isActive ? "Start" : "Pause"}
        </button>
        <button className="countdown-button-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};

export default CountdownTimer;
