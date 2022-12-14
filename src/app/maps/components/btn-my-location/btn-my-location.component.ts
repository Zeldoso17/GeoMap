import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent implements OnInit {

  constructor(private placesService: PlacesService, private mapService: MapService ) { }

  ngOnInit(): void {
  }

  goToMyLocation() {
    if ( !this.placesService.isUserLocationReady ) throw Error('No hay ubicación de usuario');
    if ( !this.mapService.isMapReady ) throw Error('No hay un mapa disponible');
    this.mapService.flyto( this.placesService.userLocation!  )


  }

}
