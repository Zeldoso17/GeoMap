import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-logout',
  templateUrl: './btn-logout.component.html',
  styleUrls: ['./btn-logout.component.scss']
})
export class BtnLogoutComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout(){
    const token = localStorage.getItem('token')
    this.http.post('http://localhost:8000/api/auth/logout/', {}, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .subscribe(resp => {
      console.log(resp)
      localStorage.removeItem('token')
      localStorage.removeItem('direcciones')
      localStorage.removeItem('showDirections')
      this.router.navigate(['/login'])
    })
  }

}
