import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SalarioUsuario } from '../../models/SalarioUsuario.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../Aurh.service';
//Services
import { SalarioService } from '../../servicios/Clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})

export class SalarioComponent implements OnInit {


  salario: SalarioUsuario = {
    nombre:'',
    apellido:'',
    email:'',
    saldo: 0
  }

  url= 'https://ultraenvios.azurewebsites.net/api/Customer';

  constructor(private authService: AuthService,
              private http: HttpClient,
              private SalarioService: SalarioService,
              private router: Router) { }

  Salario(formData: SalarioUsuario){
    const data = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      saldo: formData.saldo
    };

  this.http.post(this.url, data).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log("Hay un error:", error);
    }
  );



}

usuariosS: any;
ngOnInit(){
  this.http.get(this.url).subscribe(
    (data) => {
      this.usuariosS = data;
      console.log(this.usuariosS);
    }

  );

    this.SalarioService.getSalarios()
    .subscribe(
      (data) => {
        this.Clientes = data;
        console.log(this.Clientes);
      }
    );
}

Clientes: SalarioUsuario[] = [];

  getSalarioTotal(){
    let total = 0;
    for(let i = 0; i < this.Clientes.length; i++){
      total += this.Clientes[i].saldo;
    }
    return total;
    }


    //Logout y que me lleve a la pagina de login
    logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }




}


