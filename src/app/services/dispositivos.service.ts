import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class DispositivosService {
  constructor(private http:HttpClient) { }

  API_URI='http://localhost:3000';

  getDispositivo(usuario:number){
    return this.http.get(`${this.API_URI}/dispositivos/${usuario}`,{observe:"body"});
  }
  getInfo(dispositivo:number): Observable<any>{
    return this.http.get(`${this.API_URI}/datos/${dispositivo}`,{observe:"body"});
  }

}
