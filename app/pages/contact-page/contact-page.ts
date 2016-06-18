import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/contact-page/contact-page.html'
})
export class ContactPage {
    constructor(private _navController:NavController) {
    }

    onPageWillEnter() {
        document.getElementsByTagName("ion-navbar-section")[0]["style"].display = "none";
    }

//show nav bar when we leave the page
    onPageDidLeave() {
        document.getElementsByTagName("ion-navbar-section")[0]["style"].display = "block";
    }
}
