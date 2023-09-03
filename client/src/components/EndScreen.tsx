import React from 'react';

interface EndScreenProps {
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

function EndScreen({setMode} : EndScreenProps) {
  return (
    <div id="EndScreen">
      <div>Game Over!</div>
      <button onClick={() => setMode('start')}>Go back to title screen</button>
    </div>
  )
}
export default EndScreen;