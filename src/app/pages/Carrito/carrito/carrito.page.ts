import { Component, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonList, IonItem, IonLabel, IonFooter } from '@ionic/angular';
import { producto } from '../../../data/interface/producto.interface';
import { CarritoServiceTs } from '../../../data/services/carrito-service.ts';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonList, IonItem, IonLabel, IonFooter]
})

export class CarritoPage {

  carritoService = inject(CarritoServiceTs);

  sumar(p: producto) {
    this.carritoService.agregar(p);
  }

  restar(p: producto) {
    this.carritoService.quitar(p);
  }

  vaciarCarrito() {
    this.carritoService.vaciar();
  }

}
