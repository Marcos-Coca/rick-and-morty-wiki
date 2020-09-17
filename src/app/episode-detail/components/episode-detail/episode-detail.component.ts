import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';

import { Episode } from 'src/app/core/models/episode.model';
import { Character } from 'src/app/core/models/character.model';
import { EpisodeService } from 'src/app/core/services/episode.service';
import { concatMap, switchMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  episode$: Observable<Episode>;
  characters: Array<Character> = [];
  characterPage = 10;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.getEpisode(id));
  }

  getEpisode(id: string) {
    this.episode$ = this.episodeService.getEpisode(id);
    this.getEpisodeCharacters();
  }

  getEpisodeCharacters() {
    this.episode$
      .pipe(
        switchMap(({ characters }) =>
          from(characters.slice(0, this.characterPage)).pipe(
            concatMap((resident: string) =>
              this.episodeService.getCharacter(resident)
            ),
            toArray()
          )
        )
      )
      .subscribe((characters) => this.characters.push(...characters));
  }

  onScroll() {
    this.episode$
      .pipe(
        switchMap(({ characters }) =>
          from(
            characters.slice(this.characterPage, this.characterPage + 10)
          ).pipe(
            concatMap((resident: string) =>
              this.episodeService.getCharacter(resident)
            ),
            toArray()
          )
        )
      )
      .subscribe((characters) => this.characters.push(...characters));

    this.characterPage += 10;
  }
}
