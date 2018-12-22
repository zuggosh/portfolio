import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { FetchDataService } from './service/fetch-data/fetch-data.service';
import { AboutMeService } from './service/about-me/about-me.service';
import {News} from './service/news/news.service';

class AppComponentModel {
    show: boolean;
    burger: boolean;
    emailSend: boolean;
    spinnerShow: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AboutMeService]
})

export class AppComponent {
    appComponentModel = new AppComponentModel();
    form: FormGroup;
    constructor(@Inject(FormBuilder) fb: FormBuilder,
                private aboutMeService: AboutMeService,
                private fetchDataService: FetchDataService,
                public translate: TranslateService) {
        this.form = fb.group({
            text: ['', [Validators.minLength(2), Validators.required]],
            email: [' ', [Validators.minLength(2), Validators.required]]
        });
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.fetchDataService.currentMessage.subscribe(message => this.appComponentModel.spinnerShow = message);
    }

    onSubmit () {
      this.aboutMeService.mailMe( this.form.value.email, this.form.value.text)
        .subscribe((data: any) => {
          this.appComponentModel.emailSend = true;
          setTimeout( () => {
            this.appComponentModel.emailSend = false;
            this.form.reset();
          }, 400);
        });
    }

    scrollHandler($event) {
        let topBuffet = 0;
        const el = document.getElementById('aboutMeNav');
        if (el) {
            const aboutMe = document.getElementById('aboutMe').getBoundingClientRect().top;
            if (aboutMe < 0) {
                topBuffet = 200;
                el.style.top = Math.abs(aboutMe) + topBuffet + 'px';
            }
        }
    }
    switchLanguage(language: string) {
      this.translate.use(language);
    }

}
