import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styles: [
  ]
})
export class DetallesClienteComponent implements OnInit{

  cliente: Cliente = {
    nombre: "",
    edad: 0,
    genero: "Ms",
    carrito: [],
  }
  clienteNombre!: string;

  constructor( private dataService: DataService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.clienteNombre=params['nombre'];
        this.cliente = this.dataService.buscarCliente(this.clienteNombre);
      }
    })

  }
}
