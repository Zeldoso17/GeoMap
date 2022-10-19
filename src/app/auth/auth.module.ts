import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    RegisterScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ LoginScreenComponent, RegisterScreenComponent ]
})
export class AuthModule { }
