import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeModule } from '../home/home.module';
import { EpisodeDetailRoutingModule } from './episode-detail-routing.module';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

@NgModule({
  declarations: [EpisodeDetailComponent],
  imports: [
    CommonModule,
    EpisodeDetailRoutingModule,
    HomeModule,
    InfiniteScrollModule,
  ],
})
export class EpisodeDetailModule {}
