import React, { useState, useEffect } from 'react';

interface TimerProps {
}

const Timer = ({}: TimerProps) => {
  const [sec, setSec] = useState(10);

  const countDown = () => {
    if (sec > 0) {
      setSec(sec - 1)
    }
  }

  useEffect(() => {
    setTimeout(() => countDown(), 1000);
  }, [sec]);

  return (
    <div className="timer">
      Timer: {sec}
    </div>
  );
};
export default Timer;

