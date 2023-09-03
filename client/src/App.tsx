import React, { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import Main from './components/MainScreen';
import EndScreen from './components/EndScreen';

// import Timer from './components/Timer';
// import StartModal from './components/StartScreen';'@/src/components/StartScreen';
// import WordInput from './components/WordInput';
// import Result from './components/Result';

const App: React.FC = () => {

  const [mode, setMode] = React.useState('start');

  if (mode === 'start') {
    return <TitleScreen setMode={setMode}/>
  }

  if (mode === 'game' || mode === 'result') {
    return (
      <div id="App">
        <Main mode={mode} setMode={setMode}/>
      </div>
    );
  }

  if (mode === 'end') {
    return  <EndScreen setMode={setMode}/>
  }
}

export default App;