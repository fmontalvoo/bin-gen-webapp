import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../models/card.model';
import { CardGeneratorService } from '../../services/card-generator/card-generator.service';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-amex',
  templateUrl: './amex.component.html',
  styleUrls: ['./amex.component.css']
})
export class AmexComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private gs: GeneratorService, private cgs: CardGeneratorService) {
    this.formulario = this.formBuilder.group({
      numero: ['', [Validators.required, Validators.min(10)]],
      fecha: [''],
      cvv: [''],
      cantidad: [5, [Validators.required]],
      rand: [false],
      tarjetas: [''],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach(control => {
        if (control instanceof FormGroup)
          Object.values(control.controls).forEach(ctrl => ctrl.markAsTouched());
        else
          control.markAsTouched();
      });
    }

    const numero: string = this.formulario.get('numero')?.value.trim();
    const fecha: string = this.formulario.get('fecha')?.value.trim();
    const cvv: string = this.formulario.get('cvv')?.value.trim();
    const cantidad: number = this.formulario.get('cantidad')?.value;
    const rand: boolean = this.formulario.get('rand')?.value;

    if (numero.length < 10) {
      alert('Debe ingresar al menos 10 digitos');
    } else {
      const card: Card = {
        number: numero.replace(/ /g, ''),
        valid: fecha || 'mm/yyyy',
        cvv: cvv || 'cvv',
        type: 'amex'
      };

      this.gs.registrarTarjeta(card);

      const tarjetas = rand ? this.cgs.generateRandomCards(numero.replace(/ /g, ''), fecha, cvv, 14, cantidad).join('\n')
        : this.cgs.generateSequencialCard(numero.replace(/ /g, ''), fecha, cvv, cantidad, 14).join('\n');

      this.formulario.get('tarjetas')?.setValue(tarjetas);
    }

  }

  public isInValid(input: string) {
    return this.formulario.get(input)?.invalid && this.formulario.get(input)?.touched;
  }

  public isValid(input: string) {
    return this.formulario.get(input)?.valid;
  }

}
