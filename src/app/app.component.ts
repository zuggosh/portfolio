import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { FetchDataService } from './service/fetch-data/fetch-data.service';

class AppComponentModel {
    show: boolean;
    burger: boolean;
    spinnerShow: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    appComponentModel = new AppComponentModel();
    form: FormGroup;
    constructor(@Inject(FormBuilder) fb: FormBuilder,
                private fetchDataService: FetchDataService,
                public translate: TranslateService) {
        this.form = fb.group({
            text: ['', Validators.minLength(10)],
            email: [' ', Validators.minLength(4)]
        });
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.fetchDataService.currentMessage.subscribe(message => this.appComponentModel.spinnerShow = message);
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
