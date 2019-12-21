import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ActivatedRoute,Router} from '@angular/router';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {
  hola="esta mierda no funcionacCTM";
  constructor(private activedRoute:ActivatedRoute,private dispositivo:DispositivosService) {
    this.id=this.activedRoute.snapshot.params.id;
    this.getInfo();
    //hacer la busqueda de los 10 ultimos datos de este dispositvo para graficarlos

    //funcoin para actualizar datos de  los arreglos de los graficos    
  }
  //Guarda el id del dispositivo que mostrara la informacion 
  id:any;
  //Ejee y para PH vs Tiempo
  datosPH:any;
  //Eje y para Temperatura vs tiempo 
  datosTemp:any=[];
  //Eje x para los dos graficos anteriores 
  datosTiempo:any=[];
  datos: Observable<any>;
  //informacion de la y cada data corresponde a una funcion diferente
  public lineChartData: ChartDataSets[] = [
    {data:[1,2,3,4,5,6,7,8,9,10], label: 'PH v/s Tiempo'}
    //{ data: [this.datosPH[0],this.datosPH[1],this.datosPH[2],this.datosPH[3],this.datosPH[4],this.datosPH[5],this.datosPH[6],this.datosPH[7],this.datosPH[8],this.datosPH[9]], label: 'PH v/s Tiempo' },
    //{ data: [this.datosTemp[0],this.datosTemp[1],this.datosTemp[2],this.datosTemp[3],this.datosTemp[4],this.datosTemp[5],this.datosTemp[6],this.datosTemp[7],this.datosTemp[8],this.datosTemp[9]], label: 'Temperatura °C v/s Tiempo' }
  ];
  //informacion de la x 
  
  //public lineChartLabels: Label[] = [this.datosTiempo[0],this.datosTiempo[1],this.datosTiempo[2],this.datosTiempo[3],this.datosTiempo[4],this.datosTiempo[5],this.datosTiempo[6],this.datosTiempo[7],this.datosTiempo[8],this.datosTiempo[9]];
  public lineChartLabels: Label[] = ["1","2","3","4","5","6","7","8","9","10"];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgb(39, 190, 196)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  ngOnInit() {
    //traer id de la url con activeRouter.params
    //hacer la busqueda de los 10 ultimos datos de este dispositvo para graficarlos
      /*
      this.datosPH.push(this.datos[i].ph);
      this.datosTemp.push(this.datos[i].temp);
      this.datosTiempo.push(time);
      */
    }
    //funcoin para actualizar datos de  los arreglos de los graficos 
    getInfo(){
    this.dispositivo.getInfo(this.id).subscribe(
      data => {
        this.datos=data;
        console.log(this.datos);
      },
      err=>console.log(err)
    )
    console.log(this.datos);

  }
  }

 
  
  /*
  Objetivos de la app:
    La App deve tener un panel para ingresar y registrarse,
    al momento de ingresar la primera vista nos mostrara todos nuestros
    dispositvos que tenemos en las piscina , donde tambien tendremos una opcion 
    añadir mas dispositvos a nuestra cuenta ;al clickear en un dispositivo 
    nos mostrara la informacion de este , dandonos su volumen maximo ,
    los graficos de ph y temperatura v/s tiempo y un grafico de barras
    donde se relacionan ambas variables.
    Pasos para crear la app:
    
  -crear los servicios correspondientes para traer info desde la Api
  -crear el login de la app 
  -crear la pantalla de inicio con los diferentes dispostivos y que se 
  -pueda agregar otro
  -crear funcion para ir actualizando valores en el grafico//buscar libreria sockets 
  creo que eso me permitira que la api devuleva valores a penas la bd reciba modificaciones

  13-12-2019
  ----> crar un boton que haga la consulta denuevo y era akdgja hay que reutiliar recursos perron
  ----> crar variable para saber que liquiedo tiene la valvula , si para aumentar ph , disminuir o si no tiene liquido 
      esta variable debe ser enviada al arduino para que analice si utilizar la valvula o no.
  
  */ 

  


  // events

