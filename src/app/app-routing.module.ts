import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import {AboutMeComponent} from './about-me/about-me.component';
import {NewsComponent} from './news/news.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {TrainingComponent} from './training/training.component';



const ROUTES: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'news', component: NewsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'training', component: TrainingComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES
    , { })],
  providers: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
