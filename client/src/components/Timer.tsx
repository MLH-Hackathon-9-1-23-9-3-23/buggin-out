import React, { useState, useEffect } from 'react';

interface TimerProps {
  startTimer: boolean;
}

const Timer = ({startTimer}: TimerProps) => {
  // const [ms, setMS] = useState(0);
  const [sec, setSec] = useState(10);

  useEffect(() => {
    if (sec > 0 && startTimer) {
      console.log(sec)
      setTimeout(() => setSec(sec - 1), 1000);
    }
  }, [sec, startTimer]);

  return (
    <div className="timer">
      Timer: {sec}
    </div>
  );
};

export default Timer;

