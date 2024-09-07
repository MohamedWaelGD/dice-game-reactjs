import React from 'react'
import GameHeader from '../components/Game/GameHeader'
import DiceClicker from '../components/Game/DiceClicker'

const Game = () => {
  return (
    <div className='h-screen p-10'>
      <GameHeader/>
      <DiceClicker/>
    </div>
  )
}

export default Game