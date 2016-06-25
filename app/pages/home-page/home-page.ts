import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {Card, ProductCard} from '../../components/product-card'

@Component({
    templateUrl: 'build/pages/home-page/home-page.html',
    directives: [ProductCard]
})
export class HomePage {
    mySlideOptions = {
        initialSlide: 0,
        loop: true,
        pager: true,
        speed: 600,
        autoplay: 2000
    };
    @ViewChild('mySlider') slider: Slides;

    card: Card;
    card1: Card;

    constructor(private _navController:NavController) {
        this.card = new Card();
        this.card.title = 'Title';
        this.card.subTitle = 'Sub Title';
        this.card.picUrl = 'img/henhouse.png';

        this.card1 = new Card();
        this.card1.title = 'Title';
        this.card1.subTitle = 'Sub Title';
        this.card1.picUrl = 'img/henhouse.png';
        this.card1.picPos = 'B';
    }

    onSlideChanged() {
        // let currentIndex = this.slider.getActiveIndex();
        // console.log("Current index is", currentIndex);
    }

    goToFactsPage() {
        this._navController.push(ScientificFactsPage);
    }
}
