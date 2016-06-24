import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountManagerPage} from '../account-manager/account-manager'
import {SystemManagerPage} from '../system-manager/system-manager'

@Component({
    templateUrl: 'build/pages/profile-page/profile-page.html'
})
export class ProfilePage {
    constructor(private nav:NavController) {
    }

    onPageWillEnter() {
        document.getElementsByTagName("ion-navbar-section")[0]["style"].display = "none";
    }

//show nav bar when we leave the page
    onPageDidLeave() {
        document.getElementsByTagName("ion-navbar-section")[0]["style"].display = "block";
    }

    enterAccountManagerPage(){
        this.nav.push(AccountManagerPage);
    }

    enterSystemManagerPage(){
        this.nav.push(SystemManagerPage);
    }

}
