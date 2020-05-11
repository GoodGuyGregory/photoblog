import { Component } from '@angular/core';


@Component({
    // component area to mount the component to the DOM
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    emoji = ['Awesome!', 'Great!', 'Get it done!'];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }

}
