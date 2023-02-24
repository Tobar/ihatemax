import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/LoginUsuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUser: LoginUsuario = {
    username: '',
    password: '',
  };


  constructor(private http: HttpClient, private router: Router) {}

   login(){
    const url = 'https://ultraenvios.azurewebsites.net/api/Authenticate/login';
    const body = {
      username: this.loginUser.username,
      password: this.loginUser.password,
    };
    this.http.post(url, body).subscribe(
      (response: any) => {
        this.router.navigate(['/salario']);
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
}




