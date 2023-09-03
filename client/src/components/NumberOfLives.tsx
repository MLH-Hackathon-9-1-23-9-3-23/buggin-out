import React, { useState, useEffect } from 'react';
interface LivesProps{
    sec:number;
    mode:string;
    setMode: (arg0:string)=>void;
}

const Lives = ({sec, mode, setMode}: LivesProps) => {
    const [lives, setLives] = useState(3);
    const loseLife = () => {
        //if user mistypes a words
        setLives(lives-1);
    }

    useEffect(()=>{
        if(sec===0){
            if(lives>0){
                loseLife();
                console.log('life lost!')
                setMode('tryAgain')
            } else{
                setMode('end')
            }
        }
    }, [sec])

    return (
        <div className="lives">
            Lives: {lives}
        </div>
    );
};

export default Lives;