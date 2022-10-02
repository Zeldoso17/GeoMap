import { Component, OnInit } from '@angular/core';
import { PlacesService, SearchParamsService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent implements OnInit {

  constructor( private placesService: PlacesService, private searchParamsService: SearchParamsService ) { }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  ngOnInit(): void {
  }

}
