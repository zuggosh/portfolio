import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NewsComponent } from './news/news.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrainingComponent } from './training/training.component';


import { NewsService } from './service/news/news.service';
import { AboutMeService } from './service/about-me/about-me.service';
import { FetchDataService } from './service/fetch-data/fetch-data.service';
import { PortfolioService } from './service/portfolio/portfolio.service';

const appRoutes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'news', component: NewsComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'training', component: TrainingComponent}
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NewsComponent,
    PortfolioComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SlideshowModule
  ],
  providers: [
      NewsService,
      AboutMeService,
      FetchDataService,
      PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
