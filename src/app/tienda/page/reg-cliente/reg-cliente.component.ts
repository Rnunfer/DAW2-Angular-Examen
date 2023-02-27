import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styles: [
  ]
})
export class RegClienteComponent {

  form: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    edad: [, [Validators.required, Validators.min(1)]]
    //genero: [, [Validators.required]]
    // No recuerdo cómo implementar la validación a los checks
  })

  constructor (private fb: FormBuilder, private dataService : DataService) {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.dataService.clientes.push(this.form.value);
    } else {
      console.log("ERROR")
    }

  }
}
