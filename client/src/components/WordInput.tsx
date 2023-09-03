import React, { useState, useEffect } from 'react';

interface WordInputProps {
  matched: boolean;
  sec: number;
  typedWord: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const WordInput: React.FC<WordInputProps> = ({matched, sec , typedWord, handleInputChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={typedWord}
        onChange={handleInputChange}
        disabled={sec === 0 || matched ? true : false}
      />
      <button type="submit" disabled={sec === 0 || matched ? true : false}>Submit</button>
    </form>
  )
};
export default WordInput;