import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonInput, IonButton } from '@ionic/angular';
import { producto } from '../../data/interface/producto.interface';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss'],
  imports: [FormsModule, IonItem, IonInput, IonButton],
})

export class FormProductoComponent {

  @Input() restauranteId!: number;

  nombre: string = '';
  precio: number | null = null

  @Output() productoCreado = new EventEmitter<producto>();

  crear() {
    if (this.nombre === '' || this.precio === null) {
      return;
    }
    
    const nuevo: producto = {
      id: 0, 
      restauranteId: this.restauranteId,
      nombre: this.nombre,
      precio: Number(this.precio),
      imagen: 'assets/img/test.png'
    };
    this.productoCreado.emit(nuevo);

    this.nombre = '';
    this.precio = null;

  }
}
