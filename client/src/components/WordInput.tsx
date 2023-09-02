import React, { useState, useEffect } from 'react';

interface WordInputProps {
  typedWord: string,
  playing: boolean,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const WordInput: React.FC<WordInputProps> = ({typedWord, playing, handleInputChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={typedWord}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
};
export default WordInput;