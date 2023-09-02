import React from "react";
import Timer from "./Timer";

interface MainProps {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main({ playing, setPlaying }: MainProps) {
  return (
    <div id="Main">
      <Timer startTimer={playing}/>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
    </div>
  );
}
