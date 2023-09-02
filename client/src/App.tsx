import React from 'react';

import Timer from './components/Timer';
import StartModal from './components/StartScreen';'@/src/components/StartScreen';
import Main from './components/MainScreen';

export default function App() {
  const [playing, setPlaying] = React.useState(false);

  return (
        <div id="App">
      <Main playing={playing} setPlaying={setPlaying}/>
      <StartModal />
    </div>
  );
}