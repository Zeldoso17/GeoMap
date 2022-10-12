import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  constructor() { }

  public distancia!: string;
  public tiempo!: string;

  public get getDistance(){
    return localStorage.getItem('distancia')!
  }

  public get getTime(){
    return localStorage.getItem('tiempo')!
  }

  ngOnInit(): void {}

}
