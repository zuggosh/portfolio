import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class AppComponentModel {
    show: boolean;
    burger: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    appComponentModel = new AppComponentModel();
    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            text: ['', Validators.minLength(0)],
            email: [' ', Validators.minLength(2)]
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
}
