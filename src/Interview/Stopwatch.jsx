import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // Start the stopwatch
  const startTimer = () => {
    setRunning(true);
  };

  // Pause the stopwatch
  const pauseTimer = () => {
    setRunning(false);
  };

  // Reset the stopwatch
  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  // Update seconds every second
  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Clear interval when paused or unmounted
    return () => clearInterval(timer);
  }, [running]);

  // Convert seconds into minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <h2>Stopwatch</h2>

      <h1>
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;