import {Component} from '@angular/core'
import {HomePage} from '../home-page/home-page';
import {CategoryPage} from '../category-page/category-page';
import {AroundPage} from '../around-page/around-page';
import {ProfilePage} from '../profile-page/profile-page';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private homeRoot:any;
    private categoryRoot:any;
    private aroundRoot:any;
    private profileRoot:any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.homeRoot = HomePage;
        this.categoryRoot = CategoryPage;
        this.aroundRoot = AroundPage;
        this.profileRoot = ProfilePage;
    }
}
