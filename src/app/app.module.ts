import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
