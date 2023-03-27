import React, { useState, useContext } from 'react'
import { data } from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [animals, setAnimals] = useState(data);
  const [scores, setScores] = useState({currentScore: 0, bestScore: 0});
  const [clickedAnimals, setClickedAnimals] = useState([]);

  const randomAnimals = (name) => {
    for (let i = animals.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [animals[i], animals[j]] = [animals[j], animals[i]]
    }
    setAnimals([...animals]);
    if (clickedAnimals.includes(name)) {
      setScores((oldValue) => {
        return ({
          ...scores,
          currentScore: 0 
        });
      })
      setClickedAnimals([]);
    } else {
      setScores((oldValue) => {
        if (oldValue.bestScore > oldValue.currentScore) {
          return ({
            ...scores, 
            currentScore: oldValue.currentScore + 1
          })
        } else {
          return ({...scores, 
            currentScore: oldValue.currentScore + 1, 
            bestScore: oldValue.bestScore + 1
          })
        }
      })
      setClickedAnimals([...clickedAnimals, name]);
    }
  }


  return (
    <AppContext.Provider 
      value={{
        animals, 
        scores,
        randomAnimals
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
