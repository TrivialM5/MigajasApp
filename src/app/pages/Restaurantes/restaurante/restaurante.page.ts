import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular';
import { TarjetaComponent } from '../../../components/tarjeta/tarjeta.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { RestauranteService } from '../../../data/services/restaurante-service';
import { FavoritosService } from '../../../data/services/favoritos-service';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, TarjetaComponent]
})

export class RestaurantePage implements OnInit {

  private restauranteService = inject(RestauranteService);
  private router = inject(Router);
  favoritoService = inject(FavoritosService);

  restaurantes: restaurante[] = [];
  mensajeError: string = '';
  

  ngOnInit() {
    this.restauranteService.obtenerTodos().subscribe({
      next: (data) => {
        this.restaurantes = data;
      }, 
      error: (err) => {
        console.log(err);
        this.mensajeError = 'No se pudieron cargar los restaurantes'
      }
    });
  }

  abrirRestaurante(r: restaurante) {
    this.router.navigate(['/productos', r.id]);
  }

  alternarFavorito(r: restaurante) {
    this.favoritoService.alternar(r);
  }

}
