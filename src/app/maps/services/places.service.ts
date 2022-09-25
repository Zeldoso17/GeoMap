import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  
  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor( private http: HttpClient ) {
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
    
    this.http.get(`https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/${query}/32.4925757,-116.9088753/${metros}/${environment.TOKEN_INEGI}`)
    .subscribe( console.log )
  }
  
}
