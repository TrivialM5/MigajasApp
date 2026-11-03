import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonCard, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { restaurante } from '../../data/interface/restaurante.interface';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
  imports: [IonCard, IonButton, IonIcon],
})

export class TarjetaComponent {

  @Input() restaurante!: restaurante;
  @Input() esFavorito: boolean = false;

  @Output() seleccionado = new EventEmitter<restaurante>();
  @Output() favoritoCambio = new EventEmitter<restaurante>();

  constructor() {
    addIcons({ heart, heartOutline });
  }

  abrir() {
    this.seleccionado.emit(this.restaurante);
  }

    alternarFavorito() {
      this.favoritoCambio.emit(this.restaurante);
    }

}
