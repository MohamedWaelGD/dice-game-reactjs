import React from 'react'
import dices from '/dices.png';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row justify-center items-center'>
      <img src={dices}/>
      <div className='flex flex-col justify-center items-end gap-5'>
       <h1 className='text-7xl font-bold'>DICE GAME</h1>
       <div>
         <Button isRounded={true} label="Play Now" link="/game" classStyle="px-20 py-3" />
       </div>
      </div>
    </div>
  )
}

export default Home