import { url } from './api.model';
export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: url[];
  url: url;
  created: string;
}
