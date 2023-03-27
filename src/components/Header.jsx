import React from 'react'
import Scoreboard from './Scoreboard'

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        <h2>animal crossing memory game</h2>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
      <div className='scoreboard'>
        <Scoreboard />
      </div>
    </div>
  )
}

export default Header
