import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { bUsuario } from '../modelos/bUsuario';
import { Usuario } from '../modelos/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {

    this.isUserLoggedIn = false;
   }
   headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
   private isUserLoggedIn;
   API_URI='http://localhost:3000';
   
  registro(usuario:any){
    return this.http.post(`${this.API_URI}/register`,usuario);
  }
  login(Email:string,Pass:string){
    return this.http.post(`${this.API_URI}/usuarios`,{
      email:Email,
      password:Pass
    }, { headers: this.headers });
  }
//Guardar Id en token en local Storage
  saveDispositivo(){
    //para agregar nuevos dispositivos
  }
  //Guardar usuario logeado en local storage
  usuarioLogeado(user:any){
    this.isUserLoggedIn = true;
    let user_string=JSON.stringify(user);
    localStorage.setItem("UsuarioLogeado",user_string);
  }
  getUsuarioLogeado(){
    //traemos la informacion del localStorage , y la convertimos en json
    let user_string=localStorage.getItem("UsuarioLogeado");
    if(!isNullOrUndefined(user_string)){
      let user:any=JSON.parse(user_string);
      return user;
    }else{
      return null
    }
  }
}



