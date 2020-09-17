import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Location } from '../models/location.model';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getLocation(id: string) {
    return this.httpClient.get<Location>(
      `${environment.api_url}/location/${id}`
    );
  }

  getCharacter(url: string) {
    return this.httpClient.get<Character>(url);
  }
}
