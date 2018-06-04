import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MusicComponent } from './music/music.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'music', component: MusicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MusicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
