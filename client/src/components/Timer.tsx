import React, { useState, useEffect } from 'react';

interface TimerProps {
  startTimer: boolean;
  resetTimer: boolean;
}

const Timer = ({startTimer, resetTimer}: TimerProps) => {
  // const [ms, setMS] = useState(0);
  const [sec, setSec] = useState(10);

  useEffect(() => {
    if (sec > 0 && startTimer) {
      console.log(sec)
      setTimeout(() => setSec(sec - 1), 1000);
    }
  }, [sec, startTimer]);

  useEffect(()=>{
    setSec(10);
  },[resetTimer])

  return (
    <div className="timer">
      Timer: {sec}
    </div>
  );
};

export default Timer;

