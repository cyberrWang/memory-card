import React from 'react'
import { useGlobalContext } from './Context'

const Cards = () => {
  const { animals, randomAnimals } = useGlobalContext();

  return (
    <div className='cards-container'>
      {animals.map((animal, index) => {
        const img = animal.img;
        const name = animal.name;
        return (
          <div className='card' key={index} onClick={() => randomAnimals(name)}>
            <img src={img} alt={name}/>
            <div className='name'><h3>{name}</h3></div>
          </div>
        );
      })}
    </div>
  )
}

export default Cards
