import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/character.model';
import { Observable, from, Subscription } from 'rxjs';
import { switchMap, concatMap, toArray } from 'rxjs/operators';
import { CharacterService } from 'src/app/core/services/character.service';
import { Episode } from 'src/app/core/models/episode.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character$: Observable<Character>;
  episode$: Subscription;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.getCharacter(id));
  }
  ngOnDestroy() {
    this.episode$.unsubscribe();
  }

  getCharacter(id: string) {
    this.character$ = this.characterService.getCharacter(id);
    this.getEpisodesInfo();
  }

  getEpisodesInfo() {
    this.episode$ = this.character$
      .pipe(
        switchMap(({ episode }) =>
          from(episode).pipe(
            concatMap((ep: string) => this.characterService.getEpisode(ep)),
            toArray()
          )
        )
      )
      .subscribe(console.log);
  }
}
