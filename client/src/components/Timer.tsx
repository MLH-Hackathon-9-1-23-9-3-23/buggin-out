import React, { useState, useEffect } from 'react';

interface TimerProps {
  startTimer: boolean;
}

const Timer = ({ startTimer }: TimerProps) => {
  const [ms, setMS] = useState(0);
  let startup = Date.now();
  let timerId: string | number | NodeJS.Timeout | undefined;

  const getTime = () => {
    setMS(Date.now() - startup);
  };

  useEffect(() => {
    if (startTimer) {
      // Start the timer when 'startTimer' prop is true
      timerId = setInterval(getTime, 34);
    } else {
      // Stop the timer when 'startTimer' prop is false
      clearInterval(timerId);
    }

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, [startTimer]);

  return (
    <div className="timer">
      {ms}
    </div>
  );
};

export default Timer;
