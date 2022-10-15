import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { BtnMoreInfoComponent } from './components/btn-more-info/btn-more-info.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchButtonComponent,
    DirectionsComponent,
    BtnMoreInfoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
