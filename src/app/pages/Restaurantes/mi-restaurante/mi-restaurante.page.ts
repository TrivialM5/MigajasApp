import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/angular';
import { FormProductoComponent } from '../../../components/form-producto/form-producto.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { producto } from '../../../data/interface/producto.interface';
import { FormRestauranteComponent } from '../../../components/form-restaurante/form-restaurante.component';


@Component({
  selector: 'app-mi-restaurante',
  standalone: true,
  templateUrl: './mi-restaurante.page.html',
  styleUrls: ['./mi-restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormProductoComponent, FormRestauranteComponent, IonCard, IonCardTitle, IonCardContent, IonCardHeader]
})
export class MiRestaurantePage implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  miRestaurante: restaurante | null = null;
  productosPropios: producto[] = []

  guardarRestaurante(nuevo : restaurante) {
    this.miRestaurante = nuevo
  }

  agregarProducto(nuevo : producto) {
    this.productosPropios.push(nuevo)
  }
}