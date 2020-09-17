import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Episode } from '../models/episode.model';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private httpClient: HttpClient) {}

  getEpisode(id: string) {
    return this.httpClient.get<Episode>(`${environment.api_url}/episode/${id}`);
  }

  getCharacter(url: string) {
    return this.httpClient.get<Character>(url);
  }
}
