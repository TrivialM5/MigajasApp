import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonFooter } from '@ionic/angular';
import { TarjetaProductoComponent } from '../../../components/tarjeta-producto/tarjeta-producto.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { producto } from '../../../data/interface/producto.interface';
import { RestauranteService } from '../../../data/services/restaurante-service';
import { ProductoService } from '../../../data/services/producto-service';
import { CarritoServiceTs } from '../../../data/services/carrito-service.ts';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonFooter, RouterLink, TarjetaProductoComponent]
})

export class ProductosPage implements OnInit {

  @Input() id!: string;

  private restauranteService = inject(RestauranteService);
  private productoService = inject(ProductoService);
  carritoService = inject(CarritoServiceTs);

  restaurante: restaurante | null = null;
  productos: producto[] = [];

  ngOnInit() {

    const restauranteId = Number(this.id);

    this.restauranteService.obtenerPorId(restauranteId).subscribe({
      next: (data) => {
        this.restaurante = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.productoService.obtenerPorRestaurante(restauranteId).subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  agregar(p: producto) {
    this.carritoService.agregar(p);
  }

  quitar(p: producto) {
    this.carritoService.quitar(p);
  }


}
