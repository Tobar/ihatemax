import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalarioUsuario } from '../models/SalarioUsuario.model';


@Injectable({
  providedIn: 'root'
})
export class SalarioService {

    clienteCollecions: SalarioUsuario[] = [];

    constructor(private http: HttpClient) { }

getSalarios(): Observable<SalarioUsuario[]>{
  return this.http.get<SalarioUsuario[]>('https://ultraenvios.azurewebsites.net/api/Customer');
}



}
