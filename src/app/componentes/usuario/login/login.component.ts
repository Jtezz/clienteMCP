import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../services/usuario.service';
import {Usuario} from '../../../modelos/usuario';
import { bUsuario } from 'src/app/modelos/bUsuario';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit() {
  }
  usuario:bUsuario={
    email:'',
    password:''
  }

  login(){
    this.usuarioService.login(this.usuario.email,this.usuario.password).subscribe(
      res =>{
        this.usuarioService.usuarioLogeado(res[0]);
       this.router.navigate(["/home"]);
      },
      err=>console.log(err)
    )

  }
}