// Suits
export const CARD_SUITS = [
    'Hearts',
    'Diamonds',
    'Clubs',
    'Spades'
] as const;

export type CardSuit = typeof CARD_SUITS[number]; // New: same as CardSuit = Hearts | Diamonds | Clubs | Spades; creates a union type of every element in the array for type safety without enums

// Values with RANK
export const CARD_VALUES = [
    { label: '2', rank: 2 }, // reset
    { label: '3', rank: 3 },
    { label: '4', rank: 4 },
    { label: '5', rank: 5 },
    { label: '6', rank: 6 },
    { label: '7', rank: 7 },
    { label: '8', rank: 8 },
    { label: '9', rank: 9 },
    { label: '10', rank: 10 }, // clear
    { label: 'J', rank: 11 },
    { label: 'Q', rank: 12 },
    { label: 'K', rank: 13 },
    { label: 'A', rank: 14 },
] as const;

export type CardValue = typeof CARD_VALUES[number];

// Final Card type
export interface Card {
    suit: CardSuit;
    value: CardValue;   // value.label + value.rank
}
