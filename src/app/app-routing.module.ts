import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';
import { LoginScreenComponent, RegisterScreenComponent } from './auth';
import { AuthGuardGuard } from './guards/auth-guard.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'registro',
    component: RegisterScreenComponent
  },
  {
    path: '',
    component: MapScreenComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
