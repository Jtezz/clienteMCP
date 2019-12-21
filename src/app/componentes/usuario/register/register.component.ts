import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../services/usuario.service';
import {Usuario} from '../../../modelos/usuario';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  usuario:Usuario={
    id:null,
    nombre:'',
    email:'',
    password:''
  }
  registrar(){
    this.usuarioService.registro(this.usuario).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
  }

}
