import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { producto } from '../../data/interface/producto.interface';
import { IonList, IonItem, IonInput, IonButton } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-producto',
  standalone: true,
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton],
})
export class FormProductoComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}

  @Input() restauranteId!: number;

  nombre: string = ''
  precio: string = ''

  @Output() productoCreado = new EventEmitter<producto>();

  crear() {
    const nuevo: producto = {
      id: Date.now(),
      restauranteId: this.restauranteId,
      nombre: this.nombre,
      precio: this.precio
    }; 
    this.productoCreado.emit(nuevo);
  }
}
