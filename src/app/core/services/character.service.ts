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
  getCharacter(id: string) {
    return this.http.get<Character>(`${environment.api_url}/character/${id}`);
  }

  getPage(page: number) {
    return this.http.get<ApiResponse>(
      `${environment.api_url}/character/?page=${page}`
    );
  }

  getFirstEpisode(character: Character) {
    return this.http.get<Episode>(character.episode[0]);
  }

  getEpisode(url: string) {
    return this.http.get<Episode>(url);
  }

  getAllEpisode(character: Character) {}
}
