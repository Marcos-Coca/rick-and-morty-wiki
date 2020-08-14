import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [HomeComponent, ListOfCharactersComponent, CharacterComponent],
  imports: [CommonModule, HomeRoutingModule, InfiniteScrollModule],
})
export class HomeModule {}
