import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { FormComponent } from '../../../components/form/form.component';
import { AuthService } from '../../../data/services/auth-service';
import { usuario } from '../../../data/interface/usuario.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormComponent]
})

export class RegisterPage {

  private authService = inject(AuthService);
  private router = inject(Router);

  mensajeError: string = ''; 

  registrar(datos: usuario) {
    this.mensajeError = '';

    this.authService.registrar(datos).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      }, 
      error: (err) => {
        if (err.status === 0) {
          this.mensajeError = 'No hay conexion con servidor';
        } else {
          this.mensajeError = err.error?.mensaje || 'No se pudo registrar el usuario';
        }
      }
    })
  }
}
