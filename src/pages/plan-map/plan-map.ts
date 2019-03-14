import { Component ,ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {AttractionPage} from '../attraction/attraction';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  CircleOptions,
  LatLngBounds
 } from '@ionic-native/google-maps';
 import { Geolocation } from '@ionic-native/geolocation';
 
/**
 * Generated class for the PlanMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan-map',
  templateUrl: 'plan-map.html',
})
export class PlanMapPage {
 // @ViewChild('map') mapElement:ElementRef;
  map: GoogleMap;
  mapElement: HTMLElement;
  zoomLevels:Array<any>;
  zoomLevel:number;
  ratio:number;
  myBound:LatLngBounds;
  point1:any; // 30 mins
  point2:any; // 60 mins
  points:Array<any>;
  currentPosition:{
    lat:number,
    lng:number
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps:GoogleMaps, public platform:Platform, public geolocation:Geolocation) {
    this.zoomLevels = [
      {"level":20, "ratio": 1128.497220},
      {"level":19 , "ratio": 2256.994440 },
      {"level":18 , "ratio": 4513.988880 },
      {"level":17 , "ratio": 9027.977761 },
      {"level":16 , "ratio": 18055.955520 },
      {"level":15 , "ratio": 36111.911040 },
      {"level":14 , "ratio": 72223.822090 },
      {"level":13 , "ratio": 144447.644200 },
      {"level":12 , "ratio": 288895.288400 },
      {"level":11 , "ratio": 577790.576700 },
      {"level":10 , "ratio": 1155581.153000 },
      {"level":9 , "ratio": 2311162.307000 },
      {"level":8 , "ratio": 4622324.614000 },
      {"level":7 , "ratio": 9244649.227000},
      {"level":6 , "ratio": 18489298.450000 },
      {"level":5 , "ratio": 36978596.910000 },
      {"level":4 , "ratio": 73957193.820000 },
      {"level":3 , "ratio": 147914387.600000 },
      {"level":2 , "ratio": 295828775.300000 },
      {"level":1 , "ratio": 591657550.500000 }
    ];
    // let d = 60 * 6 * 1000;
    // alert(this.platform.width());
    // this.ratio = d  / this.platform.width();
    // for(var i = 0; i < 20; i++){
    //   if(this.ratio <= this.zoomLevels[i].ratio){
    //     this.zoomLevel = this.zoomLevels[i].level;
    //     break;
    //   }
    // }
    // alert(window.screen.availWidth);
    // alert(window.screen.width);
    // alert(window.devicePixelRatio);
    // var physicalScreenWidth = window.screen.width * window.devicePixelRatio * 0.264583;
    // alert(physicalScreenWidth);
    // var physicalScreenHeight = window.screen.height * window.devicePixelRatio;
    // this.geolocation.getCurrentPosition().then(position=>{
    //   this.currentPosition.lat = position.coords.latitude;
    //   this.currentPosition.lng = position.coords.longitude;
    //   alert(JSON.stringify(position.coords));
    // }).catch(err=>{
    //   alert(err);
    // });

  }
  toRad(a:number) {
    return a * Math.PI / 180;
  }
 
  toDeg(a:number) {
    return a * 180 / Math.PI;
  }
 //brng:radian
  getNewPoint(brng:number, dist:number, point:any) {
    dist = dist / 6371;    
    brng = this.toRad(brng);
    var lat1 = this.toRad(point.lat);
    var lon1 = this.toRad(point.lng);
 
    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + 
                         Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
 
    var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
                                 Math.cos(lat1), 
                                 Math.cos(dist) - Math.sin(lat1) *
                                 Math.sin(lat2));
 
    if (isNaN(lat2) || isNaN(lon2)) return null;
 
    return {lat:this.toDeg(lat2), lng:this.toDeg(lon2)};
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanMapPage');

  }
  ngAfterViewInit(){
    this.loadMap();
  }
  loadMap(){
     this.mapElement = document.getElementById('map');

     console.log("find #map element");
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 9,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    console.log("map initialized");
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        //var iconBase = 'https://adventgrp.atlassian.net/browse/DREAMTRACK-5';
        //Now you can use all methods safely.
        var icon = 'http://orbis-vis.com/api/images/map-icons/me-icon-1x.png';
        let position =  {
          lat: 43.0741904,
          lng: -89.3809802
        };
        this.point1 = this.getNewPoint(0, 26, position);
        this.point2 = this.getNewPoint(0, 60, position);
        let position1 = this.getNewPoint(220, 21, position);
        let position2 = this.getNewPoint(230, 38, position);
        let position3 = this.getNewPoint(200, 50, position);
        let position4 = this.getNewPoint(180, 25, position);
        // this.points.push(position1);
        // this.points.push(position2);
        // this.points.push(position3);
        // this.points.push(position4);
        this.map.addMarker({
          title: 'Historial Warrgamba',
          icon: 'http://orbis-vis.com/api/images/map-icons/blue-place-icon-1x.png',
          animation: 'DROP',
          position : position1
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              this.navCtrl.push(AttractionPage);
            });
        });
        this.map.addMarker({
          title: 'Historial Warrgamba',
          icon: 'http://orbis-vis.com/api/images/map-icons/perpol-place-icon1x.png',
          animation: 'DROP',
          position : position2
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              this.navCtrl.push(AttractionPage);
            });
        });
        this.map.addMarker({
          title: 'Historial Warrgamba',
          icon: 'http://orbis-vis.com/api/images/map-icons/perpol-place-icon1x.png',
          animation: 'DROP',
          position : position3
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              this.navCtrl.push(AttractionPage);
            });
        });
        this.map.addMarker({
          title: 'Historial Warrgamba',
          icon: 'http://orbis-vis.com/api/images/map-icons/blue-place-icon-1x.png',
          animation: 'DROP',
          position : position4
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              this.navCtrl.push(AttractionPage);
            });
        });

        this.map.addMarker({
            title: 'Ionic',
            icon: icon,
            animation: 'DROP',
            position : position
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });
        this.map.addMarker({
          title: 'Ionic',
          icon: 'http://orbis-vis.com/api/images/map-icons/car&time1x.png',
          animation: 'DROP',
          position : this.point1
        });
        this.map.addMarker({
          title: 'Ionic',
          icon: 'http://orbis-vis.com/api/images/map-icons/car&time-perpol1x.png',
          animation: 'DROP',
          position : this.point2
        });
        
        this.map.addCircle({
          strokeColor: '#8560a8',
          strokeWidth: 5,
          fillColor: '#00000000',
          clickable:true,
          center:{
            lat: 43.0741904,
            lng: -89.3809802
          } ,
          radius: 68000
        });
        this.map.addCircle({
          strokeColor: '#3296fe',
          strokeWidth: 5,
          fillColor: '#00000000',
          clickable:true,
          center:{
            lat: 43.0741904,
            lng: -89.3809802
          } ,
          radius: 34000
        });

      });

    // let element = this.mapElement.nativeElement;
    // this.map = this.googleMaps.create(element);
  }
  goToPreviousPage(){
    this.navCtrl.pop();
  }
}
