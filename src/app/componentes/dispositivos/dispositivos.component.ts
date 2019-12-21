import { Component, OnInit } from '@angular/core';
import{UsuarioService} from '../../services/usuario.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import {Dispositivo} from'../../modelos/dispositivo';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  Dispositivos: any;
  usuarioLog: Usuario;


  constructor(private dispo:DispositivosService,private usuarioService:UsuarioService,private router:Router) { 

    this.usuarioLog=this.usuarioService.getUsuarioLogeado();
    }

  ngOnInit() {
  }

  getDispositivos(){
    this.dispo.getDispositivo(this.usuarioLog.id).subscribe(
      res=>{
        this.Dispositivos= res as Dispositivo[];
        console.log(res)
        console.log(this.Dispositivos)
      },
      err=>console.log(err)
    );
    console.log(this.Dispositivos);
  }
}
