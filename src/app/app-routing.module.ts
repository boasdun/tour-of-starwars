import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { OpeningCrawlComponent } from './opening-crawl/opening-crawl.component';

const routes: Routes = [
  { path: '', redirectTo: '/openingcrawl', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: 'openingcrawl', component: OpeningCrawlComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
