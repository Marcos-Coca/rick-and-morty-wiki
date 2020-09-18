import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'character/:id',
        loadChildren: () =>
          import('./character-detail/character-detail.module').then(
            (m) => m.CharacterDetailModule
          ),
      },
      {
        path: 'location/:id',
        loadChildren: () =>
          import('./location-detail/location-detail.module').then(
            (m) => m.LocationDetailModule
          ),
      },
      {
        path: 'episode/:id',
        loadChildren: () =>
          import('./episode-detail/episode-detail.module').then(
            (m) => m.EpisodeDetailModule
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
