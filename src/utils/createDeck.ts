import { CARD_SUITS, CARD_VALUES, type Card } from "../models/Card";

export function createDeck(): Card[] {
    const deck: Card[] = [];

    // for each suit, create a card for each value
    for (const s of CARD_SUITS) {
        for (const v of CARD_VALUES) {
            deck.push({suit: s, value: v});
        }
    }

    return deck;
}
