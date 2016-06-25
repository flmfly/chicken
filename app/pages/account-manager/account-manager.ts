import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AccountManagerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/account-manager/account-manager.html',
})
export class AccountManagerPage {
  constructor(private nav: NavController) {}

  onPageWillEnter() {
    document.getElementsByTagName("ion-navbar-section")[0]["style"].display = "block";
  }

  openNavDetailsPage(item: any){

  }
}
