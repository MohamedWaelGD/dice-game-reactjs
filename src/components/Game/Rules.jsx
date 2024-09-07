import React from 'react'

const Rules = () => {
  return (
    <div className='bg-rules p-4'>
        <h3 className='text-xl font-bold'>How to play dice game</h3>
        <ul className="list-none">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
          <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </div>
  )
}

export default Rules