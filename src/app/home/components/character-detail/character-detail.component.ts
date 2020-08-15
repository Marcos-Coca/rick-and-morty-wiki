import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/character.model';
import { Observable, from, forkJoin } from 'rxjs';
import { map, tap, switchMap, concatMap, mergeMap } from 'rxjs/operators';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: [
    './character-detail.component.scss',
    '../character/character.component.scss',
  ],
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character>;
  episode$: any;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.getCharacter(id));
  }

  getCharacter(id: string) {
    this.character$ = this.characterService.getCharacter(id);
    this.getEpisodesInfo();
  }

  getEpisodesInfo() {
    this.episode$ = this.character$
      .pipe(
        mergeMap(({ episode }) =>
          from(episode).pipe(
            concatMap((ep: string) => this.characterService.getEpisode(ep))
          )
        )
      )
      .subscribe(console.log);

    console.log(this.episode$);
  }
}
