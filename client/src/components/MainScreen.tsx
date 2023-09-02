import React, {useState} from "react";
import Timer from "./Timer";
import WordInput from './WordInput';
import Result from './Result';

const sampleData = [
  {
    word: "bumblebee",
    funFact: "Bumble bees' wings beat more than 100 times a second!"
  },
  {
    word: "honey",
    funFact: "Honey is sweet"
  },
]

interface MainProps {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type Submit = (event: React.FormEvent<HTMLFormElement>) => void;

export default function Main({ playing, setPlaying }: MainProps) {
  const [wordToMatch, setWordToMatch] = useState("spider");
  const [typedWord, setTypedWord] = useState("");
  const [result, setResult] = useState("");
  const [funFact, setFunFact] = useState("");
  const [resetTimer, setResetTimer] = useState(false);

  const handleInputChange: InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (typedWord === wordToMatch) {
      setResult("Correct!");
      var fact = 'no fun fact :('
      var index = sampleData.findIndex(item => item.word === typedWord)
      if(index !== -1){
        fact = sampleData[index].funFact;
      }
      setResetTimer(true);
      setFunFact(fact);
    } else {
      setResult("Try again!");
    }
  };


  return (
    <div id="Main">
      <Timer startTimer={playing} resetTimer={resetTimer}/>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
      <h1>{wordToMatch}</h1>
      <WordInput playing={playing} typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
      <Result result={result} funFact={funFact} />
    </div>
  );
}
