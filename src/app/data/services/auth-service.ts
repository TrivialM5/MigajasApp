import { Service } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { usuario } from '../interface/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private http = inject(HttpClient);
    private url = environment.apiUrl + '/usuarios';

    usuarioActual: usuario | null = null;

    registrar(nuevo: usuario): Observable<usuario> {
        return this.http.post<usuario>(this.url, nuevo);
    }

    login(correo: string, contrasena: string): Observable<usuario> {
        return this.http.post<usuario>(this.url + '/login', { correo, contrasena});
    }

    guardarSesion(u: usuario) {
        this.usuarioActual = u;
    }

    cerrarSesion() {
        this.usuarioActual = null;
    }


}
