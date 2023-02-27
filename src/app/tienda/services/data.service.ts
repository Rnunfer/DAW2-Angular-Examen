import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _clientes: Cliente[] = [
    {
      nombre: 'Rodrigo',
      edad: 29,
      genero: 'H',
      carrito: [
        {nombre: 'martillo', precio: 10, cantidad: 1},
        {nombre: 'monitor', precio: 135, cantidad: 1}
      ]
    },
    {
      nombre: 'Maria',
      edad: 33,
      genero: 'M',
      carrito: [
        {nombre: 'taladro', precio: 57, cantidad: 1},
        {nombre: 'monitor', precio: 135, cantidad: 1}
      ]
    },
    {
      nombre: 'Juan',
      edad: 56,
      genero: 'H',
      carrito: [
        {nombre: 'cama elastica', precio: 275, cantidad: 2},
        {nombre: 'regadera', precio: 5, cantidad: 2}
      ]
    },
    {
      nombre: 'Sara',
      edad: 22,
      genero: 'H',
      carrito: [
        {nombre: 'gafas de bucear', precio:20, cantidad: 1},
        {nombre: 'llavero', precio: 2, cantidad: 3}
      ]
    },
    {
      nombre: 'Azuzena',
      edad: 45,
      genero: 'H',
      carrito: [
        {nombre: 'florero', precio: 500, cantidad: 2},
        {nombre: 'auriculares', precio: 15, cantidad: 1}
      ]
    },
  ];


  private _productos: Producto[] = [
    {
      nombre: 'taladro',
      precio: 57,
      cantidad: 3
    },
    {
      nombre: 'monitor',
      precio: 135,
      cantidad: 2
    },
    {
      nombre: 'auriculares',
      precio: 15,
      cantidad: 12
    },
    {
      nombre: 'cama elastica',
      precio: 275,
      cantidad: 2
    },
    {
      nombre: 'llavero',
      precio: 2,
      cantidad: 34
    },
  ]

  constructor() { }

  buscarCliente(nombre:string) {

    let cliente: Cliente = {
      nombre: "",
      edad: 0,
      genero: "M",
      carrito: []
    }

    for (let i = 0; i < this._clientes.length; i++) {
      if (this._clientes[i].nombre == nombre) {
        cliente = this._clientes[i];
      }
    }

    return cliente;
  }

  get clientes() {
    return this._clientes;
  }

  get productos() {
    return this._productos;
  }
}
