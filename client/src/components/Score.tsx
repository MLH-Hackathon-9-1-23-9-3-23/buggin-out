import React, { useState, useEffect } from 'react';

const Score = ({wordLength}: { wordLength: Number }) => {
    const [score, setScore] = useState(0);
    const calculateScore = () => {
        if (!score) {
            setScore(Number(wordLength))
        } else {
            setScore(score*Number(wordLength))
        }
    }
    return (
        <div className="score">
            Current Score: {score}
        </div>
    );
};

export default Score;