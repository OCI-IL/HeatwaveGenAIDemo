import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  start?: boolean;
  onStop?: (count: number) => void;
}

const Timer: React.FC<TimerProps> = ({ start, onStop }) => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (start) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      onStop && onStop(count);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [start, onStop, count]);

  const formatTime = (count: number) => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <p>{formatTime(count)}</p>
    </div>
  );
};

export default Timer;
