import { Injectable } from '@angular/core';
import { AnySourceData, LngLat, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Lugares } from '../interfaces/places';
import { DirectionsApiClient } from '../api';
import { DirectionsResponse, Route } from '../interfaces/directions';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];
  public directions = "Direcciones";
  public direccionesBool: boolean = false;
  public direcciones: Array<String> = []

  constructor(private directionsApi: DirectionsApiClient){ }

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
          this.getRoute(userLocation, [parseFloat(place.Longitud), parseFloat(place.Latitud)])
          localStorage.setItem('showDirections', 'true')
          this.direccionesBool = true
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

  getRoute( start: [number, number], end: [number, number] ){

    this.directionsApi.get<DirectionsResponse>(`/${ start.join(',') }; ${ end.join(',')} `)
      .subscribe( resp => this.drawPolyline( resp.routes[0] ) )
  }

  private drawPolyline( route: Route ) {
    console.log({ kms: Math.ceil(route.distance / 1000), duration: Math.ceil(route.duration / 60)})
    localStorage.setItem('distancia', Math.ceil(route.distance/1000).toString())
    localStorage.setItem('tiempo', Math.ceil(route.duration / 60).toString())

    this.direcciones = []
    route.legs[0].steps.forEach( step => this.direcciones.push(step.maneuver.instruction))
    localStorage.setItem('direcciones', JSON.stringify(this.direcciones))

    if ( !this.map ) throw Error('Mapa no inicializado')

    const coords = route.geometry.coordinates;

    const bounds = new LngLatBounds();
    coords.forEach( ( [ lng, lat ] ) => bounds.extend( [ lng, lat ] )) 

    this.map?.fitBounds( bounds, {
      padding: 200
    });

    // Polyline
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    // TODO: Limpiar ruta previa
    if (this.map.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString')
    }

    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    });

  }

}
