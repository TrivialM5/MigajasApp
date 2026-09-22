import { Component, Input, OnInit } from '@angular/core';
import { restaurante } from '../../data/interface/restaurante.interface';
import { IonCardHeader, IonCardContent, IonCard, IonCardTitle, IonButton } from '@ionic/angular';
import { producto } from '../../data/interface/producto.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
  imports: [IonCardHeader, IonCardContent, IonCard, IonCardTitle, IonButton],
})
export class TarjetaComponent  implements OnInit {

  mostrarProductos = false;

  constructor() { }

  ngOnInit() {}

  @Input() restaurante !: restaurante;

  verProductos() {
    this.mostrarProductos = !this.mostrarProductos;
  }

   productos : producto[] = [
      {
        id: 1,
        restauranteId: 101,
        nombre: 'Pizza',
        precio: '12000'
      },
      {
        id: 2,
        restauranteId: 101,
        nombre: 'Pollo',
        precio: '11000'
      },
      {
        id: 3,
        restauranteId: 102,
        nombre: 'Perro',
        precio: '12000'
      },
      {
        id: 4,
        restauranteId: 102,
        nombre: 'Choriperro',
        precio: '12000'
      }
    ]

}
