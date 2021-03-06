import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeDetailRoutingModule {}
