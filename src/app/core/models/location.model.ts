import { url } from './api.model';

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: url[];
  url: url;
  created: string;
}
