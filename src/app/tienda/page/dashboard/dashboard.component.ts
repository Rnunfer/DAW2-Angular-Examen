import { Component, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  constructor (private dataService : DataService) {}

  get clientes() {
    return this.dataService.clientes;
  }

  get productos() {
    return this.dataService.productos;
  }

}
