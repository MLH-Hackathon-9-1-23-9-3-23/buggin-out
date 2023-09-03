import React from 'react'
import Timer from "./Timer";

interface ResultContainerProps {
  mode: string,
  setMode: React.Dispatch<React.SetStateAction<string>>;
  getOtherWord: () => void;
}

function ResultContainer({mode, setMode, getOtherWord}: ResultContainerProps ) {

  // const [result, setResult] = useState("");
  // const [funFact, setFunFact] = useState("");

  if (mode === 'game') {
    return (
      <Timer />
    )
  }
  if (mode === 'result') {
    return (
      <div>
        <button
          onClick={
            () => {
              getOtherWord();
              setMode('game');
            }
          }
        >
          Press Me
        </button>
        {/* Put the fun fact here or something like "You did it!" */}
      </div>
    )
  }
}
export default ResultContainer;