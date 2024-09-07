import React from 'react'
import TotalScore from './Game Header/TotalScore'
import SelectDice from './Game Header/SelectDice'

const GameHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <TotalScore/>
      <SelectDice/>
    </div>
  )
}

export default GameHeader