import { Component, OnInit, HostBinding } from '@angular/core';
import {DispositivosService} from'../../services/dispositivos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Dispositivo} from '../../modelos/dispositivo';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dispo',
  templateUrl: './dispo.component.html',
  styleUrls: ['./dispo.component.css']
})
export class DispoComponent implements OnInit {
@HostBinding ('class') classes = 'row';
  userLoger:any;
  //guarda los dispositvos del usuario logeado
  public aux: any=[];
  
  constructor(private dispos:DispositivosService,private usuarioService:UsuarioService,private router:Router, private activatedRoute: ActivatedRoute) {

   this.userLoger=this.usuarioService.getUsuarioLogeado();
  
  }

  ngOnInit() {
  this.getDispositvosUser(this.userLoger.id);    
  console.log(this.aux);
  }

  getDispositvosUser(id:number){
    this.dispos.getDispositivo(id).subscribe(
      res=>{ 
        this.aux= res;
        console.log(res);
      },
      err=> console.log(err)
    );

  }
}
