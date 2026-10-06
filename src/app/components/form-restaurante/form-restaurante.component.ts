import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { restaurante } from '../../data/interface/restaurante.interface';
import { IonList, IonItem, IonInput, IonButton } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { image } from 'ionicons/icons';

@Component({
  selector: 'app-form-restaurante',
  standalone: true,
  templateUrl: './form-restaurante.component.html',
  styleUrls: ['./form-restaurante.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton],
})
export class FormRestauranteComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}

  nombre: string = '';
  direccion: string = ''

  @Output() restauranteCreado = new EventEmitter<restaurante>();

  crear() {
    const nuevo: restaurante = {
      id: Date.now(),
      nombre: this.nombre,
      direccion: this.direccion,
      imagen: 'assets/img/test.png'
    };
    this.restauranteCreado.emit(nuevo)
  }
}
