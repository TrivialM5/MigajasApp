import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { producto } from '../interface/producto.interface';
import { ItemCarrito } from '../interface/item-carrito.interface';

@Injectable({
    providedIn: 'root'
})

export class CarritoServiceTs {

    items: ItemCarrito[] = [];

    agregar(p: producto) {
        const existente = this.items.find(i => i.producto.id === p.id);
        if (existente) {
            existente.cantidad++;
        } else {
            this.items.push({producto: p, cantidad: 1});
        }
    }

    quitar(p: producto) {
        const existente = this.items.find(i => i.producto.id === p.id);
        if (!existente) {
            return;
        }
        existente.cantidad--;
        if (existente.cantidad === 0) {
            this.items = this.items.filter(i => i.producto.id !== p.id);
        }
    }

    cantidadDe(productoId: number): number {
        const existente = this.items.find(i => i.producto.id === productoId);
        return existente ? existente.cantidad : 0;
    }

    total(): number {
        let suma = 0;
        for (const item of this.items) {
            suma += item.producto.precio * item.cantidad;
        }
        return suma;
    }

    vaciar() {
        this.items = [];
    }
}
