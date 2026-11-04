import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular';
import { TarjetaComponent } from '../../../components/tarjeta/tarjeta.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { FavoritosService } from '../../../data/services/favoritos-service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, TarjetaComponent]
})

export class FavoritosPage{

  favoritoService = inject(FavoritosService);
  private router = inject(Router);

  abrirRestaurante(r: restaurante) {
    this.router.navigate(['/productos', r.id]);
  }

  alternarFavorito(r: restaurante) {
    this.favoritoService.alternar(r);
  }

}
