import { Injectable } from '@angular/core';

import { PlacesResponse, Lugares } from '../interfaces'
import { PlacesApiClient, infoPlacesApiClient } from '../api'
import { MapService } from './map.service';
 
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false
  public places: Lugares[] = [];
  public infoLugar: Lugares[] = []
  
  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor( private placesApi: PlacesApiClient, private infoPlacesApi: infoPlacesApiClient ,private mapService: MapService ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ( {coords} ) => {
          this.userLocation = [ coords.longitude, coords.latitude ];
          resolve( this.userLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización');
          console.log('No se pudo obtener la geolocalización');
          reject();
        }
      );
    })
  }

  getPlaces( query: string = '', metros: string = '' ){
    this.isLoadingPlaces= true
    let locationReverse = this.userLocation?.reverse().join(',');
    this.placesApi.get<PlacesResponse>(`/${query}`, {
      headers: {
        Authorization: 'Token 6e731f606e058a2eea45e13bbe2b1648a827d0e2'
      },
      params: {
        proximity: locationReverse!,
        metros: metros!
      }
    })
    .subscribe( resp => {
      this.isLoadingPlaces = false
      this.places = resp.lugares
      this.mapService.createMarkersPlaces(this.places, this.userLocation! )
    });
    locationReverse = this.userLocation?.reverse().join(',');
  }

  getPlaceInfo( pk: string = ''){
    this.infoPlacesApi.get<Lugares[]>(`/${pk}`, {
      headers: {
        Authorization: 'Token 6e731f606e058a2eea45e13bbe2b1648a827d0e2'
      }
    })
    .subscribe( resp => {
      this.infoLugar = resp
    })
  }
  
}
