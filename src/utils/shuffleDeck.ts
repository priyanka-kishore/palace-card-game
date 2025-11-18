import type { Card } from "../models/Card";

// Note - avoid mutating the passed-in state array. Shuffle and return a new array

// Fisher-Yates shuffle:
// Walk through the array from end → start, and swap each index with a random earlier index.
export function shuffleDeck(deck: Card[]): Card[] {
    if (deck.length === 0) {
        console.log('nothing to shuffle!')
        return deck
    }

    const shuffled = [...deck]; // copy array

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * i)
    
        const cardAtCurrentIndex = shuffled[i]
        shuffled[i] = shuffled[swapIndex]
        shuffled[swapIndex] = cardAtCurrentIndex
    }

    return shuffled;
}
