import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//graficos

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LineaComponent} from './componentes/graficos/linea.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegisterComponent } from './componentes/usuario/register/register.component';
import { DispoComponent } from './componentes/dispo/dispo.component';

import {DispositivosService} from './services/dispositivos.service';
import { UsuarioService } from './services/usuario.service';
@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    LoginComponent,
    RegisterComponent,
    DispoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    DispositivosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
