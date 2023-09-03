import React, { useState, useEffect } from 'react';

interface WordInputProps {
  typedWord: string,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const WordInput: React.FC<WordInputProps> = ({typedWord, handleInputChange, handleSubmit}) => {
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