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
      restauranteId: 101,
      nombre: 'El sabor',
      direccion: 'una calle',
    }, 
    {
      id: 2,
      restauranteId: 102,
      nombre: 'El buen sabor',
      direccion: 'otra calle',
    }
  ];

}
