import { url } from './api.model';
export interface Character {
  id: string;
  name: string;
  status: status;
  species: string;
  type: string;
  gender: gender;
  origin: Origin;
  location: Location;
  image: url;
  episode: url[];
  url: url;
  created: string;
}

enum status {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

enum gender {
  Female = 'Female',
  Male = 'Male',
  unknown = 'unknown',
}

interface Origin {
  name: string;
  url: url;
}

interface Location {
  name: string;
  url: url;
}
