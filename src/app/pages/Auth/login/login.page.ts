import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { FormComponent } from '../../../components/form/form.component';
import { AuthService } from '../../../data/services/auth-service';
import { usuario } from '../../../data/interface/usuario.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormComponent]
})
export class LoginPage implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);
  mensajeError: string = '';

  ngOnInit() {
    this.authService.cerrarSesion();
    }

  iniciarSesion(datos: usuario) {
    this.mensajeError = '';

    this.authService.login(datos.correo, datos.contrasena).subscribe({
      next: (u) => {
        this.authService.guardarSesion(u);
        this.router.navigate(['/restaurante']);
      }, 
      error: (err) => {
        if (err.status === 0) {
          this.mensajeError = 'No hay conexion al servidor'
        } else {
          this.mensajeError = err.error?.mensaje || 'No se pudo iniciar sesion'
        }
      }
    });
  }
}
