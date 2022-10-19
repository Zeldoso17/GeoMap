import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginApi } from '../../api';
import { LoginResponse } from '../../interface'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    const credenciales = {
      username: this.username,
      password: this.password
    }
    this.http.post<LoginResponse>('http://localhost:8000/api/auth/login/', credenciales)
    .subscribe(resp => {
      console.log(resp)
      localStorage.setItem('token', resp.access_token)
      this.router.navigate([''])
    })
  }

}
