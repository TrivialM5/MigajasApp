import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonButton, IonInput, IonItem, IonList, IonContent, IonLabel, IonCheckbox } from '@ionic/angular';
import { usuario } from '../../data/interface/usuario.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [FormsModule, RouterLink, IonButton, IonInput, IonItem, IonList, IonContent, IonLabel, IonCheckbox]
})

export class FormComponent {

  mostrarApto = false;
  infoAdi = true;

  @Input() esRegistro: boolean = false;
  @Input() mensajeError: string = '';

  @Output() enviado = new EventEmitter<usuario>();

  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  numero: string = '';
  direccion: string = '';
  localidad: string = '';
  barrio: string = '';
  conjunto: string = '';
  torre: string = '';
  vivienda: string = '';
  infoAdicional: string = '';


  camEstado() {
    this.mostrarApto = !this.mostrarApto; 
  }

  mostarInfoAdi() {
    this.infoAdi = !this.infoAdi;
  }

  enviar() {
    const datos: usuario = {
      id: 0,
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena,
      numero: this.numero,
      direccion: this.direccion,
      localidad: this.localidad,
      barrio: this.barrio,
      conjunto: this.conjunto,
      torre_apto: this.torre,
      vivienda: this.vivienda,
      infoAdicional: this.infoAdicional
    };
    this.enviado.emit(datos);
  }
}