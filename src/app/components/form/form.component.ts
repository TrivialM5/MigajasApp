import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonButton, IonInput, IonItem, IonList, IonContent, IonLabel, IonCheckbox } from '@ionic/angular';


@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [FormsModule, IonButton, IonInput, IonItem, IonList, IonContent, IonLabel, IonCheckbox]
})

export class FormComponent {

  mostrarApto = false;
  infoAdi = true;

  @Input() esRegistro: boolean = false;

  ngOnInit() {}

  camEstado() {
    this.mostrarApto = !this.mostrarApto
  }

  mostarInfoAdi() {
    this.infoAdi = !this.infoAdi
  }
}