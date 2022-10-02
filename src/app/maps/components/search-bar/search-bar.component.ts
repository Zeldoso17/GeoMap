import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() clase?: string;
  @Input() placeholder?: string;

  query?: string;
  meters?: string;

  constructor() { }

  ngOnInit(): void {
  }

  getSearchParams(value: string) {
    if ( this.clase === 'search' ){
      this.query = value;
      localStorage.setItem('query', this.query)
    }else{
      this.meters = value;
      localStorage.setItem('meters', this.meters)
    }
  }
}
