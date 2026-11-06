import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { producto } from '../interface/producto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {

    private http = inject(HttpClient);
    private url = environment.apiUrl;

    obtenerPorRestaurante(restauranteId: number): Observable<producto[]> {
        return this.http.get<producto[]>(this.url + '/restaurantes/' + restauranteId + '/productos');   
    }
    
    crear(nuevo : producto): Observable<producto> {
        return this.http.post<producto>(this.url + '/productos', nuevo)
    }

}
