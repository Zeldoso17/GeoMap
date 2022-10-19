import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2'

import { registerResponse } from '../../interface'

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})

export class RegisterScreenComponent implements OnInit {

  nombre!: string;
  apellido!: string;
  username!: string;
  email!: string;
  telefono!: string;
  password!: string;
  password2!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  public registrar(){
    const dataRegister = {
      nombre: this.nombre,
      apellido: this.apellido,
      username: this.username,
      email: this.email,
      telefono: this.telefono,
      password: this.password,
      password2: this.password2
    }
    this.http.post<registerResponse>('http://localhost:8000/api/auth/createUser/', dataRegister)
    .subscribe( resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.message,
        timer: 1500
      })
      this.router.navigate(['/login'])
    })
  }

}
