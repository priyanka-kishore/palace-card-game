import { useState } from 'react'
import './App.css'
import { createDeck } from './utils/createDeck'
import { type Card } from './models/Card';
import { shuffleDeck } from './utils/shuffleDeck';

export default function App() {
  const [deck, setDeck] = useState<Card[]>([]);

  const handleCreateDeck = () => {
    const newDeck = createDeck();
    setDeck(newDeck);
  };

  const handleShuffleDeck = () => {
    const shuffled = shuffleDeck(deck);
    setDeck(shuffled)
  }

  return (
    <>
      <h1>🃏 Palace Card Game 🃏</h1>
      <p>Who's ready to rule the palace?</p>
      <div className="card">
        <button onClick={handleCreateDeck} disabled={deck.length > 0}>
          Create deck
        </button>
        <button onClick={handleShuffleDeck} disabled={deck.length === 0}>
          Shuffle deck
        </button>
        <button onClick={() => {setDeck([])}} disabled={deck.length === 0}>
          Clear deck
        </button>

      </div>
      <div>
        <h2>{deck.length} cards</h2>
        <div className="deck-container">
          {deck.map((card, idx) => (
            <div key={idx} className="deck-card">
              <strong>{card.value.label}</strong>
              <div style={{ 
                fontSize: "12px", 
                color: card.suit === 'Hearts' || card.suit === 'Diamonds' ? 'red' : 'black'
              }}>
                {card.suit}
              </div>
              <div style={{ fontSize: "12px", marginTop: "4px" }}>
                Rank: {card.value.rank}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="creator">
        Created by Priyanka Kishore - Nov 2025
      </p>
    </>
  )
}


