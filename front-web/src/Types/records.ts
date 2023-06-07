export type Records = {
  id: number;
  name: string;
  age: number;
  moment: string;
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
};

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';
