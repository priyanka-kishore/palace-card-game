import type { Card } from "./Card";
import type { Player } from "./Player";
import type { GameState } from "./GameState";

export interface Game {
    id: string;
    players: Player[];
    turnOrder: string[];
    currentPlayerId: string;
    startingPlayerId: string;

    deck: Card[];
    playPile: Card[];
    discardPile: Card[];

    gameState: GameState;
}
