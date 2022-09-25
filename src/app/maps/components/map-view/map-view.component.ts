import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor( private placesService: PlacesService, private mapService: MapService ) { }

  ngAfterViewInit(): void {
    if ( !this.placesService.userLocation ) throw new Error('No hay ubicación del usuario');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      const popup = new Popup()
        .setHTML(`
          <h6>Estas aquí</h6>
          <span>Esta es tu ubicación</span>
        `);

        new Marker({ color: '#61DAFB' })
          .setLngLat( this.placesService.userLocation )
          .setPopup( popup )
          .addTo(map)

          this.mapService.setMap( map );

  }

}
