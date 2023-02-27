import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reg-producto',
  templateUrl: './reg-producto.component.html',
  styles: [
  ]
})
export class RegProductoComponent {

  form: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    precio: [, [Validators.required, Validators.min(1)]],
    cantidad: [, [Validators.required, Validators.min(1)]]
  })

  constructor (private fb: FormBuilder, private dataService : DataService) {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.dataService.productos.push(this.form.value);
    } else {
      console.log("ERROR")
    }

  }
}
