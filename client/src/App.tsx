import React, { useState } from 'react';
import Timer from './components/Timer';
import WordInput from './components/WordInput';
import Result from './components/Result';

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

type InputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type Submit = (event: React.FormEvent<HTMLFormElement>) => void;

const App: React.FC = () => {

  const [wordToMatch, setWordToMatch] = useState("spider");
  const [typedWord, setTypedWord] = useState("");
  const [result, setResult] = useState("");
  const [funFact, setFunFact] = useState("");

  // Handle word input change
  const handleInputChange: InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(event.target.value);
  };

  // const handleSubmit: Submit = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   if (typedWord === wordToMatch) {
  //     setResult("Correct!");
  //     var fact = 'no fun fact :('
  //     var index = sampleData.find(item => item.word === typedWord)
  //     if(index !== undefined){
  //       fact = sampleData[index].funFact;
  //     }
  //     setFunFact(fact);
  //   } else {
  //     setResult("Try again!");
  //   }
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (typedWord === wordToMatch) {
      setResult("Correct!");
      var fact = 'no fun fact :('
      var index = sampleData.findIndex(item => item.word === typedWord)
      if(index !== -1){
        fact = sampleData[index].funFact;
      }
      setFunFact(fact);
    } else {
      setResult("Try again!");
    }
  };

  return (
    <div id="App">
      <p>Hello, world!</p>
      <Timer />
      <h1>{wordToMatch}</h1>
      <WordInput typedWord={typedWord} handleInputChange={ handleInputChange } handleSubmit={handleSubmit} />
      <Result result={result} funFact={funFact} />
    </div>
  );
}
export default App;

//onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value)}