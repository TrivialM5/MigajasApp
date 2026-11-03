import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { IonCard, IonButton } from '@ionic/angular';
import { producto } from '../../data/interface/producto.interface';
import { unlinkOutline } from 'ionicons/icons';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss'],
  imports: [IonCard, IonButton],
})
export class TarjetaProductoComponent {

  @Input() producto!: producto;
  @Input() cantidad: number = 0;

  @Output() agregado = new EventEmitter<producto>();
  @Output() quitado = new EventEmitter<producto>();

  masUno() {
    this.agregado.emit(this.producto);
  }

  menosUno() {
    this.quitado.emit(this.producto);
  }
}
