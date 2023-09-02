import React, { useState, useEffect } from 'react';


const Timer = () => {
  // const [ms, setMS] = useState(0);
  const [sec, setSec] = useState(10);

  useEffect(() => {
    if (sec > 0) {
      console.log(sec)
      setTimeout(() => setSec(sec - 1), 1000);
    }
  }, [sec]);

  return (
    <div className="timer">
      Timer: {sec}
    </div>
  );
};

export default Timer;

