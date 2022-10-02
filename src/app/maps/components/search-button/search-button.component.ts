import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services'

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

  query!: string;
  meters!: string;

  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
  }

  searchPlace(){
    console.log('SEARCH PLACE WORKS')
    this.query = localStorage.getItem('query')!
    this.meters = localStorage.getItem('meters')!
    this.placesService.getPlaces(this.query, this.meters)
    console.log('despues del reciebiendo data')
  }

}
