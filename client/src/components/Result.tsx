import React, { useState, useEffect } from 'react';

const Result = ({result, funFact} : {result: string, funFact: string}) => {

  return (
    <div>
      <p>{result}</p>
      {funFact && <p>Fun Fact: {funFact}</p>}
    </div>
  )
}
export default Result