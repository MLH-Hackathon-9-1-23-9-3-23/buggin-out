import React from 'react';

interface TitleScreenProps {
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

function TitleScreen({setMode} : TitleScreenProps) {
  return (
    <div id="StartScreen">
      <div className="startOrEnd">
        <div>Buggin Out</div>
        <button onClick={() => setMode('game')}>Play!</button>
      </div>
    </div>
  )
}
export default TitleScreen;