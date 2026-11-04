import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard } from '@ionic/angular';
import { FormProductoComponent } from '../../../components/form-producto/form-producto.component';
import { FormRestauranteComponent } from '../../../components/form-restaurante/form-restaurante.component';
import { restaurante } from '../../../data/interface/restaurante.interface';
import { producto } from '../../../data/interface/producto.interface';
import { RestauranteService } from '../../../data/services/restaurante-service';
import { ProductoService } from '../../../data/services/producto-service';
import { AuthService } from '../../../data/services/auth-service';

@Component({
  selector: 'app-mi-restaurante',
  standalone: true,
  templateUrl: './mi-restaurante.page.html',
  styleUrls: ['./mi-restaurante.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, FormProductoComponent, FormRestauranteComponent]
})

export class MiRestaurantePage implements OnInit {

  private restauranteService = inject(RestauranteService);
  private productoService = inject(ProductoService);
  private authService = inject(AuthService);
  private router = inject(Router);


  miRestaurante: restaurante | null = null;
  productosPropios: producto[] = [];
  mensajeError: string = '';

  ngOnInit() {
    const UsuarioActual = this.authService.usuarioActual;

    if (!UsuarioActual) {
      this.router.navigate(['/login']);
      return;
    }

    this.restauranteService.obtenerPorPropietario(UsuarioActual.id).subscribe({
      next: (data) => {
        this.miRestaurante = data;
        this.cargarProductos();
      },
      error: (err) => {
        this.miRestaurante = null;
      }
    });
  }

  cargarProductos() {
    if (!this.miRestaurante) {
      return;
    }

    this.productoService.obtenerPorRestaurante(this.miRestaurante.id).subscribe({
      next: (data) => {
        this.productosPropios = data;
      }
    });
  }


  guardarRestaurante(nuevo : restaurante) {

    const usuarioActual = this.authService.usuarioActual;

    if (!usuarioActual) {
      return;
    }

    const paraEnviar: restaurante = {
      id: nuevo.id,
      nombre: nuevo.nombre,
      direccion: nuevo.direccion,
      imagen: nuevo.imagen,
      propietarioId: usuarioActual.id
    };

    this.restauranteService.crear(paraEnviar).subscribe({
      next: (creado) => {
        this.miRestaurante = creado;
        this.mensajeError = '';
      }, 
      error: (err) => {
        this.mensajeError = err.error?.message || 'No se pudo crear el restaurante';
      }
    });
  }

  agregarProducto(nuevo : producto) {
    this.productoService.crear(nuevo).subscribe({
      next: (creado) => {
        this.productosPropios.push(creado);
        this.mensajeError = '';
      },
      error: (err) => {
        this.mensajeError = err.error?.message || 'No se pudo agregar el producto';
      }
    });
  }
}