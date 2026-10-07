import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/angular';
import { FormProductoComponent } from '../../../components/form-producto/form-producto.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { producto } from '../../../data/interface/producto.interface';
import { FormRestauranteComponent } from '../../../components/form-restaurante/form-restaurante.component';
import { RestauranteService } from '../../../data/services/restaurante-service';


@Component({
  selector: 'app-mi-restaurante',
  standalone: true,
  templateUrl: './mi-restaurante.page.html',
  styleUrls: ['./mi-restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormProductoComponent, FormRestauranteComponent, IonCard, IonCardTitle, IonCardContent, IonCardHeader]
})
export class MiRestaurantePage implements OnInit {

  miRestaurante: restaurante | null = null;
  productosPropios: producto[] = []

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
  }

  
  guardarRestaurante(nuevo : restaurante) {
    this.miRestaurante = nuevo
    this.restauranteService.agregar(nuevo);
  }

  agregarProducto(nuevo : producto) {
    this.productosPropios.push(nuevo)
  }
}