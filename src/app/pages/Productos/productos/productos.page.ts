import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';
import { producto } from '../../../data/interface/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class ProductosPage implements OnInit {

  restauranteId: number = 0;


  constructor() { }

  ngOnInit() {
  }
  productos : producto[] = [
    {
      id: 1,
      restauranteId: 1,
      nombre: 'Pizza',
      precio: '12000'
    },
    {
      id: 2,
      restauranteId: 1,
      nombre: 'Pollo',
      precio: '11000'
    },
    {
      id: 3,
      restauranteId: 2,
      nombre: 'Perro',
      precio: '12000'
    },
    {
      id: 4,
      restauranteId: 2,
      nombre: 'Choriperro',
      precio: '12000'
    }
  ]
  


}
