import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonInput, IonButton } from '@ionic/angular';
import { restaurante } from '../../data/interface/restaurante.interface';

@Component({
  selector: 'app-form-restaurante',
  standalone: true,
  templateUrl: './form-restaurante.component.html',
  styleUrls: ['./form-restaurante.component.scss'],
  imports: [FormsModule, IonItem, IonInput, IonButton],
})

export class FormRestauranteComponent {

  nombre: string = '';
  direccion: string = ''

  @Output() restauranteCreado = new EventEmitter<restaurante>();

  crear() {
    if (this.nombre === '') {
      return;
    }
    
    const nuevo: restaurante = {
      id: 0,
      nombre: this.nombre,
      direccion: this.direccion,
      imagen: 'assets/img/test.png'
    }; 
    this.restauranteCreado.emit(nuevo)
  }
}
