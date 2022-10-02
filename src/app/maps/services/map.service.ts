import { Injectable } from '@angular/core';
import { LngLat, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Lugares } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = []

  get isMapReady(){
    return !!this.map
  }

  setMap( map: Map ) {
    this.map = map
  }

  flyto( coords: LngLatLike ) {
    if ( !this.isMapReady ) throw new Error('El mapa no esta iniciado');
    
    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

  createMarkersPlaces( places: Lugares[], userLocation: [number, number] ) {
    if ( !this.map ) throw Error('Mapa no inicializado');

    this.markers.forEach( marker => marker.remove())
    const newMarkers = []

    for (const place of places) {
      const latitude = place.Latitud;
      const longitud = place.Longitud;

      const popup = new Popup()
        .setHTML(`
          <h6>${place.Nombre}</h6>
          <span>${place.Ubicacion}</span>
        `)

      const newMarker = new Marker({
        color: 'red'
      })
      newMarker
        .setLngLat([parseFloat(longitud), parseFloat(latitude)])
        .setPopup(popup)
        .addTo( this.map )
        .getElement().addEventListener('click', () => {
          console.log('Le diste clic al marcador')
        })
      newMarkers.push( newMarker );
    }

    this.markers = newMarkers

    if ( places.length === 0 ) return

    //Limites del mapa
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ))
    bounds.extend( userLocation )

    this.map.fitBounds(bounds, {
      padding: 200
    })

  }

}
