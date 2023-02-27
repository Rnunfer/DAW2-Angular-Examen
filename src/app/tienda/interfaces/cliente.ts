import { Producto } from "./producto";

export interface Cliente {
  nombre: string;
  edad: number;
  genero: string;
  carrito: Producto[];
}
