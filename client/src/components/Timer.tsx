import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [ms, setMS] = useState(0);
  let startup = Date.now();

  const getTime = () => {
    setMS(Date.now() - startup);
  }

  useEffect(() => {
    setInterval(getTime, 34);
  }, []);

  return (
    <div className="timer">
      {ms}
    </div>
  );
};
export default Timer;