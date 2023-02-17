import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioRegistro } from 'src/app/models/UsuarioRegistro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioRegistro = {
    username: '',
    email: '',
    password: '',
    name: '',
    documentNumber: '',
    contactNumber: '',
  };

  registroExitoso = false;

  url = 'https://ultraenvios.azurewebsites.net/api/Authenticate/register';

  constructor(private http: HttpClient) {}

  registrar() {
    this.http
      .post(this.url, {
        body: JSON.stringify({
          username: 'Sebas',
          email: 'sebas@gmail.com',
          password: 'helloworld',
          name: 'Sebas',
          documentNumber: '10232324',
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .subscribe((res: any) => {
        console.log('registro exitoso:', res);
        this.registroExitoso = true;
      });
  }

  usuarios: any;

  ngOnInit() {
    // Obtener el nombre de usuario desde algún lugar
    const nombreUsuario = 'usuario1';

    // Hacer la solicitud GET
    this.http
      .get(`https://ultraenvios.azurewebsites.net/api/User/wtobar`)
      .subscribe((data) => {
        this.usuarios = data;
        console.log(this.usuarios);
      });
  }
}
