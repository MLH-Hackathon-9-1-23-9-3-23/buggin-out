import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import ResultContainer from './ResultContainer';

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
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type Submit = (event: React.FormEvent<HTMLFormElement>) => void;

export default function Main({ mode, setMode }: MainProps) {
  const [wordToMatch, setWordToMatch] = useState("");

  const getNewWord = () => {
    setWordToMatch("spider");
  }

  const getOtherWord = () => {
    setWordToMatch("honey");
  }

  useEffect(() => {
    getNewWord();
  }, []);

  useEffect(() => {
    // some logic that resets the input field and timer
  }, [wordToMatch])


  // this is logic pertaining to the input field
  const [typedWord, setTypedWord] = useState("");

  const handleInputChange: InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (typedWord === wordToMatch) {
      setMode('result');
      // setResult("Correct!");
      console.log('you were right!');
      var index = sampleData.findIndex(item => item.word === typedWord)
      // var fact = 'no fun fact :('
      // if(index !== -1){
      //   fact = sampleData[index].funFact;
      // }
      // setFunFact(fact);

    } else {
      // setResult("Try again!");
      console.log('Try again!');
    }
    setTypedWord('');
  };


  return (
    <div id="Main">
      <h1>{wordToMatch}</h1>
      <WordInput typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
      <ResultContainer mode={mode} setMode={setMode} getOtherWord={getOtherWord}/>

      {/* <Timer startTimer={playing} resetTimer={resetTimer}/>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
      <h1>{wordToMatch}</h1>
      <WordInput playing={playing} typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
      <Result result={result} funFact={funFact} /> */}
    </div>
  );
}
