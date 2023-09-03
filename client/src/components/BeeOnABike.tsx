import React, { useState, useEffect } from 'react';
import bee1 from './assets/bee1.png';
import bee2 from './assets/bee2.png';
import bee3 from './assets/bee3.png';
import bee4 from './assets/bee4.png';

function BeeOnABike() {
  const [bee, setBee] = useState(bee1);

  const beeAnimate = () => {
    if (bee === bee1) {
      setBee(bee2);
    } else if (bee === bee2) {
      setBee(bee3);
    } else if (bee === bee3) {
      setBee(bee4);
    } else if (bee === bee4) {
      setBee(bee1);
    }
  }

  useEffect(() => {
    setTimeout(() => beeAnimate(), 500);
  }, [bee]);

  return (
    <img src={bee} alt="Bee On A Bike" />
  )
}
export default BeeOnABike;