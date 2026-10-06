import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { TarjetaComponent } from '../../../components/tarjeta/tarjeta.component';
import { restaurante } from '../../../data/interface/restaurante.interface';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TarjetaComponent]
})
export class RestaurantePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  restaurantes : restaurante[] = [
    {
      id: 1,
      nombre: 'Hamburguesas Krusty',
      direccion: 'una calle',
      imagen: 'assets/img/krusty.png' 
    }, 
    {
      id: 2,
      nombre: 'El Holandés Cocinante',
      direccion: 'otra calle',
      imagen: 'assets/img/fish.jpg' 
    },
    {
      id: 3,
      nombre: 'Los Pollos Hermanos',
      direccion: 'otra calle',
      imagen: 'assets/img/pollo_hermano.jpg'
    },
    {
      id: 4,
      nombre: 'Burger Shot',
      direccion: 'otra calle',
      imagen: 'assets/img/burgershot.svg'
    }
  ];

}
