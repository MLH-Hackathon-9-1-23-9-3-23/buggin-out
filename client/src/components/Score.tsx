import React, { useState, useEffect } from 'react';

const Score = ({wordToMatch, matched}: { wordToMatch: string, matched: boolean }) => {
    const [score, setScore] = useState(0);
    const calculateScore = () => {
            if (score === 0 ) {
                console.log('wordLength:' , wordToMatch.length)
                setScore(wordToMatch.length)
            } else {
                setScore(score*Number(wordToMatch.length))
            }
    }

    useEffect(()=>{
        if(matched) {
            console.log('word:', wordToMatch)
            console.log('matched!');
            calculateScore();
        }
    }, [matched])
    return (
        <div className="score">
            Current Score: {score}
        </div>
    );
};

export default Score;