/**
 * Created by Jeffrey on 6/23/16.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'product-card',
    styles: [`
        .product-card {
           background: white;
           height: 100%;
        } 
    `, `
        .product-card ion-col {
            padding: 8px
        }
    `],
    template: `
        <div class="product-card">
            <div *ngIf="!picAlignBottom">
                <ion-grid>
                    <ion-row>
                        <ion-col width-50>
                            <div [ngStyle]="titleStyle">{{card.title}}</div>
                            <div [ngStyle]="subTitleStyle">{{card.subTitle}}</div>
                        </ion-col>
                        <ion-col width-50 text-center>
                            <img src="{{card.picUrl}}" />
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <div *ngIf="picAlignBottom">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <div [ngStyle]="titleStyle">{{card.title}}</div>
                            <div [ngStyle]="subTitleStyle">{{card.subTitle}}</div>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col text-center>
                            <img src="{{card.picUrl}}" />
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </div>
    `
})
export class ProductCard implements OnInit {
    @Input() card:Card;
    picAlignBottom:boolean;

    titleColor:string = '#383838';
    subTitleColor:string = '#ff3209';
    titleStyle:any;
    subTitleStyle:any;


    ngOnInit() {
        this.picAlignBottom = this.card.picPos === 'B';
        this.titleColor = this.card.titleColor || this.titleColor;
        this.subTitleColor = this.card.subTitleColor || this.subTitleColor;
        this.titleStyle = {color: this.titleColor, 'font-weight': '500'};
        this.subTitleStyle = {color: this.subTitleColor, 'font-weight': '500'};

        let titleFontSize:string = '18px';
        let subTitleFontSize:string = '14px';

        // process font size
        if (this.card.fontSize === 'L') {
            titleFontSize = '28px';
            subTitleFontSize = '24px';
        } else if (this.card.fontSize === 'S') {
            titleFontSize = '16px';
            subTitleFontSize = '12px';
        }

        Object.assign(this.titleStyle, {'font-size': titleFontSize});
        Object.assign(this.subTitleStyle, {'font-size': subTitleFontSize});
    }
}

export class Card {
    title:string;
    titleColor:string;
    subTitle:string;
    subTitleColor:string;
    fontSize:string;
    picUrl:string;
    picPos:string;
}