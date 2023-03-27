import React from 'react'
import { useGlobalContext } from './Context'

const Scoreboard = () => {
  const { scores } = useGlobalContext();

  return (
    <div className='scoreboard'>
      <h3>current score: {scores.currentScore}</h3>
      <h3>best score: {scores.bestScore}</h3>
    </div>
  )
}

export default Scoreboard
