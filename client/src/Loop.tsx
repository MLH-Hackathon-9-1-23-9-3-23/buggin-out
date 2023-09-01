import React from 'react'

function Loop() {
  const startGameLoop = () => {
    let frame = 0;

    const gameLoop = (timestamp: number) => {
      const deltaTime = timestamp - frame;
      update(deltaTime)
      render(deltaTime);
      frame = timestamp;
      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
  }

  const update = (deltaTime: number) => { // where game's logic goes

  }

  const render = (deltaTime: number) => { // where game's visual updates will go

  }
}
export default Loop;