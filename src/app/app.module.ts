import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';

import { NewsService } from './service/news/news.service';
import { AboutMeService } from './service/about-me/about-me.service';
import { FetchDataService } from './service/fetch-data/fetch-data.service';

const appRoutes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'music', component: MusicComponent },
    { path: 'news', component: NewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MusicComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      NewsService,
      AboutMeService,
      FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
