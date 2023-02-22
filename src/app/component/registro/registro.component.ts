import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioRegistro } from 'src/app/models/UsuarioRegistro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  ngOnInit(): void {}

  url = 'https://ultraenvios.azurewebsites.net/api/Authenticate/register';

  constructor(private http: HttpClient) {}

  usuario: UsuarioRegistro = {
    documentNumber: '',
    email: '',
    name: '',
    password: '',
    username: '',
  };

  onSubmit(formData: UsuarioRegistro )       {
    const data = {
      documentNumber: formData.documentNumber,
      email: formData.email,
      name: formData.name,
      password: formData.password,
      username: formData.username,
    };

    this.http
      .post(
        url,
        data
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log("Hay un error:" error);
        }
      );
  }
}
