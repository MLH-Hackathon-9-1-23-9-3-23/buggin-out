import React, {useState, useEffect} from "react";
import axios from "axios";
import Timer from "./Timer";
import ResultContainer from './ResultContainer';
import WordInput from './WordInput';
import Score from './Score'
import Lives from './NumberOfLives'

import BeeOnABike from './BeeOnABike';

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
  const [wordsList, setWordsList] = useState<any[]>([])
  const [matched, setMatched] = useState(false);
  const [sec, setSec] = useState(10);
  const [funFact, setFunFact] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const getNewWord = async () => {
    //axios request here
    try{
      const results = await axios.get('/words')
      console.log(results);
      setWordsList(results.data)
      const baseWord = results.data[Math.floor(Math.random()*results.data.length)];
      setWordToMatch(baseWord.word);
      setFunFact(baseWord.funFact);
    } catch(err) {
      console.error(err);
    }
  }

  const getOtherWord = () => {
    //axios request here
    // try{
    //   const results = await axios.get('/words')
    //   console.log(results);
    //   const baseWord = results.data[Math.floor(Math.random()*results.data.length)];
    //   setWordToMatch(baseWord.word);
    // } catch(err) {
    //   console.error(err);
    // }
    const baseWord = wordsList[Math.floor(Math.random()* wordsList.length)];
    console.log(baseWord)
    setWordToMatch(baseWord.word);
    setFunFact(baseWord.funFact);
  }

  useEffect(() => {
    getNewWord();
  }, []);

  useEffect(() => {
    // some logic that resets the input field and timer
    setSec(10);
    setMatched(false);
    setIsWrong(false);
  }, [wordToMatch])


  // this is logic pertaining to the input field
  const [typedWord, setTypedWord] = useState("");

  const handleInputChange: InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (typedWord === wordToMatch) {
      // setMode('result');
      setMatched(true);
      // setResult("Correct!");

      console.log('you were right!');
      var index = sampleData.findIndex(item => item.word === typedWord);
      setMode('result');
    } else {
      // setResult("Try again!");
      console.log('Try again!');
      setIsWrong(true);
    }

    setTypedWord('');
  };


  return (
    <div id="Main">

      <h1 className="wordToMatch">{wordToMatch}</h1>
        <div className="playerMetrics">
          <Lives sec={sec} mode={mode} setMode={setMode}/>
          <Score wordToMatch={wordToMatch} matched={matched}/>
          <WordInput matched={matched} sec={sec} typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
          <ResultContainer sec={sec} setSec={setSec} mode={mode} setMode={setMode} getOtherWord={getOtherWord} funFact={funFact} isWrong={isWrong}/>
        </div>
 
      <div className="BeeContainer">
        <BeeOnABike />
      </div>
    </div>
  );
}
