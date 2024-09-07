import React, { useContext } from 'react'
import { DiceContext } from '../../../contexts/DiceContext';

const TotalScore = () => {
  const { diceScore } = useContext(DiceContext);

  return (
    <div className='flex flex-col justify-center items-center text-center gap-1'>
      <p className='text-8xl font-semibold'>{diceScore}</p>
      <p className='text-lg font-semibold'>Total Score</p>
    </div>
  )
}

export default TotalScore