import { Character } from './character.model';
export interface ApiResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: url;
  prev: url;
}

export type url = string;
