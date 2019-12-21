import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import {LoginComponent} from '../app/componentes/usuario/login/login.component'
import { LineaComponent } from './componentes/graficos/linea.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';
import { DispoComponent } from './componentes/dispo/dispo.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'info/:id',component:LineaComponent},
  {path:'registro',component:RegisterComponent},
  {path:'home',component:DispoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
