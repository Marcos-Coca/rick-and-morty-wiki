import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/services/character.service';
import { Episode } from 'src/app/core/models/episode.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  episode: Episode;

  constructor(private characterService: CharacterService) {}

  getEpisode() {
    this.characterService
      .getEpisode(this.character)
      .subscribe((episode) => (this.episode = episode));
  }

  ngOnInit(): void {
    this.getEpisode();
  }
}
