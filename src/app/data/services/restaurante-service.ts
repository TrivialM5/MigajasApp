import { Injectable, Service } from '@angular/core';
import { restaurante } from '../interface/restaurante.interface';

@Injectable({
    providedIn: 'root'
})

export class RestauranteService {
    private restaurantes: restaurante[] = [
    {
      id: 1,
      nombre: 'Hamburguesas Krusty',
      direccion: 'una calle',
      imagen: 'assets/img/krusty.png' 
    }, 
    {
      id: 2,
      nombre: 'El Holandés Cocinante',
      direccion: 'otra calle',
      imagen: 'assets/img/fish.jpg' 
    },
    {
      id: 3,
      nombre: 'Los Pollos Hermanos',
      direccion: 'otra calle',
      imagen: 'assets/img/pollo_hermano.jpg'
    },
    {
      id: 4,
      nombre: 'Burger Shot',
      direccion: 'otra calle',
      imagen: 'assets/img/burgershot.svg'
    }
];

constructor() {}

agregar(nuevo: restaurante){
    this.restaurantes.push(nuevo)
}

obtenerTodos() {
    return this.restaurantes;
}


}
