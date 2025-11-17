// ----- Suits -----
export const CARD_SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'] as const;
export type CardSuit = typeof CARD_SUITS[number]; // New: same as CardSuit = Hearts | Diamonds | Clubs | Spades; creates a union type of every element in the array for type safety without enums

// ----- Values -----
export const CARD_VALUES = [
    { label: 'Two',   rank: 2 }, // reset
    { label: 'Three', rank: 3 },
    { label: 'Four',  rank: 4 },
    { label: 'Five',  rank: 5 },
    { label: 'Six',   rank: 6 },
    { label: 'Seven', rank: 7 },
    { label: 'Eight', rank: 8 },
    { label: 'Nine',  rank: 9 },
    { label: 'Ten',   rank: 10 }, // clear
    { label: 'Jack',  rank: 11 },
    { label: 'Queen', rank: 12 },
    { label: 'King',  rank: 13 },
    { label: 'Ace',   rank: 14 },
] as const;

export type CardValue = typeof CARD_VALUES[number];

// ----- Card -----
export interface Card {
    suit: CardSuit;
    value: CardValue;   // value.label + value.rank
}
