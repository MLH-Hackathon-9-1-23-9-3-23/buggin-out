import React, { useState, useEffect } from 'react';

const Lives = (/*pass in fail */) => {
    const [lives, setLives] = useState(3);

    const loseLife = () => {
        //if user mistypes a word 
        setLives(lives-1);
    }

    return (
        <div className="lives">
            Lives: {lives}
        </div>
    );
};

export default Lives;