import React, { useState, useEffect } from 'react';
import Board from './components/board';
import initializeDeck from './deck';
import './App.css'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck()) 
    preloadImages()
  }, [])
  

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })
  
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        ))
  }

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
      return
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }
  const preloadImages = () => {
    cards.map((card) => {
      const src = `/img/${card.type}.png`
      new Image().src = src
    })
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  
  return (
    <div className="App">
        <h1>Memory Game</h1>
        <h2>Can you remember where the cards are?</h2>

        <Board
          dimension = { dimension }
          solved = { solved }
          cards = { cards }
          flipped = { flipped }
          handleClick = { handleClick }
          disabled = { disabled } />
    </div>
  );
}

