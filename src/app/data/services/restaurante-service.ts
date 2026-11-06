import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { restaurante } from '../interface/restaurante.interface';

@Injectable({
    providedIn: 'root'
})

export class RestauranteService {

  private http = inject(HttpClient);
  private url = environment.apiUrl + '/restaurantes';

  obtenerTodos(): Observable<restaurante[]> {
    return this.http.get<restaurante[]>(this.url);
  }

  obtenerPorId(id: number): Observable<restaurante> {
    return this.http.get<restaurante>(this.url + '/' + id);
  } 

  obtenerPorPropietario(propietarioId: number): Observable<restaurante> {
    return this.http.get<restaurante>(this.url + '/propietario/' + propietarioId);
  }

  crear(nuevo: restaurante): Observable<restaurante> {
    return this.http.post<restaurante>(this.url, nuevo);
  }


}
