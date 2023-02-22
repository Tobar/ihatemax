import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const url = 'https://ultraenvios.azurewebsites.net/api/Authenticate/login';
    const body = { username: this.username, password: this.password };

    this.http.post(url, body).subscribe(
      (response: any) => {
        // Login successful, redirect to another component
        this.router.navigate(['']);
      },
      (error: any) => {
        // Login failed, handle error
      }
    );
  }
}
