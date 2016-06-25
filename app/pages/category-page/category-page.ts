import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the CategoryPagePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/category-page/category-page.html',
})
export class CategoryPage {

    private categories:Category[] = [];

    private selectedCategory: Category;

    constructor(private nav:NavController) {

        for (let i = 0; i < 20; i++) {
            let category = new Category();
            category.name = '啊分类' + i;
            category.selected = false;
            this.categories.push(category);
        }


    }

    itemSelected(category:Category) {
        if(this.selectedCategory){
            this.selectedCategory.selected = false;
        }
        category.selected = true;
        this.selectedCategory = category;
    }
}

export class Category {
    name:string;
    selected:boolean;
}