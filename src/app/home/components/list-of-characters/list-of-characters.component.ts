import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss'],
})
export class ListOfCharactersComponent implements OnInit {
  characters: Character[];
  page = 1;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.characterService
      .getCharacters()
      .subscribe(({ results }) => (this.characters = results));
  }

  onScroll() {
    this.characterService
      .getPage(++this.page)
      .subscribe(({ results }) => this.characters.push(...results));
  }
}
