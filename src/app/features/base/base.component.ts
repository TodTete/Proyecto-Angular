import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
}) 
export class BaseComponent {
  selectedBase: string = 'decimal';
  inputNumero: string = '';
  resultadoDecimal: string = '';
  resultadoBinario: string = '';
  resultadoOctal: string = '';
  resultadoHexadecimal: string = '';

  limpiarResultado() {
    this.resultadoDecimal = '';
    this.resultadoBinario = '';
    this.resultadoOctal = '';
    this.resultadoHexadecimal = '';
  }

  constructor() { }

  convertir() {
    const numero = this.inputNumero.trim();
    if (numero === '') {
      this.limpiarResultado();
      return;
    }

    let decimalValue: number;

    switch (this.selectedBase) {
      case 'decimal':
        decimalValue = parseInt(numero, 10);
        this.resultadoDecimal = decimalValue.toString();
        this.resultadoBinario = decimalValue.toString(2);
        this.resultadoOctal = decimalValue.toString(8);
        this.resultadoHexadecimal = decimalValue.toString(16).toUpperCase();
        break;
      case 'binario':
        decimalValue = parseInt(numero, 2);
        this.resultadoDecimal = decimalValue.toString();
        this.resultadoBinario = numero;
        this.resultadoOctal = decimalValue.toString(8);
        this.resultadoHexadecimal = decimalValue.toString(16).toUpperCase();
        break;
      case 'octal':
        decimalValue = parseInt(numero, 8);
        this.resultadoDecimal = decimalValue.toString();
        this.resultadoBinario = decimalValue.toString(2);
        this.resultadoOctal = numero;
        this.resultadoHexadecimal = decimalValue.toString(16).toUpperCase();
        break;
      case 'hexadecimal':
        decimalValue = parseInt(numero, 16);
        this.resultadoDecimal = decimalValue.toString();
        this.resultadoBinario = decimalValue.toString(2);
        this.resultadoOctal = decimalValue.toString(8);
        this.resultadoHexadecimal = numero.toUpperCase();
        break;
      default:
        break;
    }
  }
}