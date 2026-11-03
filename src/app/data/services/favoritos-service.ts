import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { restaurante } from '../interface/restaurante.interface';

@Injectable({
    providedIn: 'root'
})

export class FavoritosService {
    
    restaurantes: restaurante[] = []

    esFavorito(id: number): boolean {
        return this.restaurantes.find(r => r.id === id) !== undefined;
    }

    alternar(r: restaurante) {
        if (this.esFavorito(r.id)) {
            this.restaurantes = this.restaurantes.filter(x => x.id !== r.id);
        } else {
            this.restaurantes.push(r);
        }
    }
}
