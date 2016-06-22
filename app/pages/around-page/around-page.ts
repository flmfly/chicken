import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BaiduMap, OfflineOptions, ControlAnchor} from '../../components/angular2-baidu-map';

@Component({
    templateUrl: 'build/pages/around-page/around-page.html',
    styles: [`
        baidu-map{
            width: 100%;
            height: 100%;
            display: block;
        }
    `],
    directives: [BaiduMap]
})
export class AroundPage implements OnInit {
    constructor(private navController:NavController) {
    }

    opts:any;
    offlineOpts:OfflineOptions;

    ngOnInit() {
        this.opts = {
            center: {
                longitude: 121.506191,
                latitude: 31.245554
            },
            zoom: 17,
            markers: [{
                longitude: 121.506191,
                latitude: 31.245554,
                title: 'Where',
                content: 'Put description here'
            }],
            geolocationCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            }
        };

        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    }

    loadMap(e:any) {
        console.log(e);//e here is the instance of BMap.Map
    }

    clickMarker(marker:any) {
        console.log('The clicked marker is', marker);
    }
}
