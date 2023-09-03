import React from 'react'
import Timer from "./Timer";

interface ResultContainerProps {
  sec: number;
  setSec: (arg0: number)=>void;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  getOtherWord: () => void;
  funFact: string;
  isWrong: boolean;
}

function ResultContainer({sec, setSec, mode, setMode, getOtherWord, funFact, isWrong}: ResultContainerProps ) {

  // const [result, setResult] = useState("");
  // const [funFact, setFunFact] = useState("");

  if (mode === 'game') {
    return (
      <>
        <Timer sec={sec} setSec={setSec}/>
        <p> {isWrong? <p>Try again</p>: null}</p>
      </>
    )
  }
  if (mode === 'result') {
    return (
      <div>
        <button
          onClick={() => {
            getOtherWord();
            setMode('game');
          }}
        >
          Next word
        </button>
        <p>Congrats! You did it!</p>
        <p>Fun Fact: </p>
        {funFact ? <p>{funFact}</p> : <p>There are no fun facts</p>}
      </div>
    );
  }
}
export default ResultContainer;