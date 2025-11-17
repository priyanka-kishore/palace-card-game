export const GAME_STATES = [
    'waiting-for-players',
    'waiting-for-start',
    'player-turn',
    'resolving-turn',
    'finished',
] as const;

export type GameState = typeof GAME_STATES[number];
