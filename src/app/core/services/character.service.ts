import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api.model';
import { Character } from '../models/character.model';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<ApiResponse>(`${environment.api_url}/character/ `);
  }

  getPage(page: number) {
    return this.http.get<ApiResponse>(
      `${environment.api_url}/character/?page=${page}`
    );
  }

  getEpisode(character: Character) {
    return this.http.get<Episode>(character.episode[0]);
  }
}
