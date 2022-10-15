import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services';

@Component({
  selector: 'app-btn-more-info',
  templateUrl: './btn-more-info.component.html',
  styleUrls: ['./btn-more-info.component.scss']
})
export class BtnMoreInfoComponent implements OnInit {

  constructor(public generalService: GeneralService) { }

  ngOnInit(): void {
  }

}
