import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AurhService {
  constructor(private http: HttpClient) {}

  register(usuario: { email: string; password: string;}): Observable<any> {
    const url =
      'https://ultraenvios.azurewebsites.net/api/Authenticate/register';
    return this.http.post(url, usuario);
  }
}
