import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import ResultContainer from './ResultContainer';

import WordInput from './WordInput';
import Result from './Result';
import Score from './Score'

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
  const [matched, setMatched] = useState(false);
  const [sec, setSec] = useState(10);

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
    setSec(10);
    setMatched(false);
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
      setMatched(true);
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
      <Score wordToMatch={wordToMatch} matched={matched}/> 
      <WordInput sec={sec} typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
      <ResultContainer sec={sec} setSec={setSec} mode={mode} setMode={setMode} getOtherWord={getOtherWord}/>

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
