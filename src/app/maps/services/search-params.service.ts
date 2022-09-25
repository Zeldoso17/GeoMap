import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {

  @Output() serachParamsDispatch: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
