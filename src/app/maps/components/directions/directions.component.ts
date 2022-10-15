import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  constructor( private mapService: MapService ) { }

  public distancia!: string;
  public tiempo!: string;
  public direcciones: Array<String> = []

  public get getDistance(){
    return localStorage.getItem('distancia')!
  }

  public get getTime(){
    return localStorage.getItem('tiempo')!
  }
  public get getDirecciones(){
    var direcciones = localStorage.getItem("direcciones")!
    //if ( direcciones.length > 0 ) return []
    console.log(direcciones)
    return JSON.parse(direcciones)
  }

  ngOnInit(): void {}

}
