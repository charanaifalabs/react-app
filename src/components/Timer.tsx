import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const startPause = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <div>
        <h4 style={{ color: "black" }}>
          Timer: {seconds} second{seconds !== 1 ? "s" : ""}
        </h4>
      </div>
      <br></br>
      <button onClick={startPause} style={{ marginRight: "8px" }}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
