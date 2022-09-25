import { Component, OnInit, Input } from '@angular/core';
import { SearchParamsService } from '../../services';

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

  constructor(private searchParamsService: SearchParamsService) { }

  ngOnInit(): void {
  }

  getSearchParams(value: string) {
    if ( this.clase === 'search' ){
      this.query = value;
      return
    }
    this.meters = value;
  }

}
