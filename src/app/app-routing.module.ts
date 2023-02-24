import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { SalarioComponent } from './component/salario/salario.component';
import { AurhGuard } from './Guards/auth.guard';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: '', component: LoginComponent, title: 'login'},
  { path: 'salario', component: SalarioComponent, title: 'salario'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
