import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/profile-page/profile-page.html'
})
export class ProfilePage {
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
