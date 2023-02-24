import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private currentUser: any;

  public logout(): void {
    // Lógica para eliminar el usuario actualmente autenticado de la propiedad "currentUser"
    this.currentUser = null;
    // Lógica para eliminar el token de autenticación almacenado (si lo hay)
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    // Devuelve true si hay un usuario autenticado, false en caso contrario
    return !!this.currentUser;
  }

  public getToken(): string {
    // Devuelve el token de autenticación actualmente almacenado (si lo hay)
    return localStorage.getItem('token')|| '' ;
  }

  public setToken(token: string): void {
    // Almacena el token de autenticación en el almacenamiento local del navegador
    localStorage.setItem('token', token);
  }
}
