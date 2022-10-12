import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent implements OnInit {

  constructor( private placesService: PlacesService, private mapService: MapService ) { }

  //public showDirections: string = localStorage.getItem('showDirections')!;

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  get showDirections() {
    return localStorage.getItem('showDirections')
  }

  ngOnInit(): void {
  }

}
