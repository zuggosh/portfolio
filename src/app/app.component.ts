import { Component } from '@angular/core';


class AppComponentModel {
    show: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appComponentModel = new AppComponentModel();
    scrollHandler($event) {
        let topBuffet = 0;
        const aboutMe = document.getElementById('aboutMe').getBoundingClientRect().top;
        const el = document.getElementById('aboutMeNav');
        if (aboutMe < 0) {
            topBuffet = 50;
            el.style.top = Math.abs(aboutMe) + topBuffet + 'px';
        }
    }
}
