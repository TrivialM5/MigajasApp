import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { TarjetaComponent } from '../../../components/tarjeta/tarjeta.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { RestauranteService } from '../../../data/services/restaurante-service';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TarjetaComponent]
})
export class RestaurantePage implements OnInit {

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.restaurantes = this.restauranteService.obtenerTodos();
  }

  restaurantes : restaurante[] = [];

}
