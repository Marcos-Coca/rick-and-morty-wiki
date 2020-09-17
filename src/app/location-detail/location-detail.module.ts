import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeModule } from '../home/home.module';
import { LocationDetailRoutingModule } from './location-detail-routing.module';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';

@NgModule({
  declarations: [LocationDetailComponent],
  imports: [
    CommonModule,
    LocationDetailRoutingModule,
    HomeModule,
    InfiniteScrollModule,
  ],
})
export class LocationDetailModule {}
