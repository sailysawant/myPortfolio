import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(40.753150, -74.156911),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const mapPop = {
      position: new google.maps.LatLng(40.753150, -74.156911),
      map: this.map
    };
    this.marker = new google.maps.Marker(<google.maps.MarkerOptions>mapPop);
  }

}
