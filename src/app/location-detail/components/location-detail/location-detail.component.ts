import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';

import { Location } from 'src/app/core/models/location.model';
import { LocationService } from 'src/app/core/services/location.service';
import { Character } from 'src/app/core/models/character.model';
import { concatMap, switchMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
  location$: Observable<Location>;
  residents: Array<Character> = [];
  characterPage = 10;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.getLocation(id));
  }

  getLocation(id: string) {
    this.location$ = this.locationService.getLocation(id);
    this.getLocationCharacters();
  }

  getLocationCharacters() {
    this.location$
      .pipe(
        switchMap(({ residents }) =>
          from(residents.slice(0, this.characterPage)).pipe(
            concatMap((resident: string) =>
              this.locationService.getCharacter(resident)
            ),
            toArray()
          )
        )
      )
      .subscribe((residents) => this.residents.push(...residents));
  }

  onScroll() {
    this.location$
      .pipe(
        switchMap(({ residents }) =>
          from(
            residents.slice(this.characterPage, this.characterPage + 10)
          ).pipe(
            concatMap((resident: string) =>
              this.locationService.getCharacter(resident)
            ),
            toArray()
          )
        )
      )
      .subscribe((residents) => this.residents.push(...residents));

    this.characterPage += 10;
  }
}
