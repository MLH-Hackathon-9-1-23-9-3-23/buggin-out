import React from 'react'
import Timer from "./Timer";

interface ResultContainerProps {
  sec: number;
  setSec: (arg0: number)=>void;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  getOtherWord: () => void;
}

function ResultContainer({sec, setSec, mode, setMode, getOtherWord}: ResultContainerProps ) {

  // const [result, setResult] = useState("");
  // const [funFact, setFunFact] = useState("");

  if (mode === 'game') {
    return (
      <Timer sec={sec} setSec={setSec}/>
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
          Next word!
        </button>
        {/* Put the fun fact here or something like "You did it!" */}
      </div>
    )
  }
}
export default ResultContainer;