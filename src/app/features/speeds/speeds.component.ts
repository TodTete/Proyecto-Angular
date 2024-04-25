import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-speeds',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatSelectModule ],
  templateUrl: './speeds.component.html',
  styleUrl: './speeds.component.css'
})
export class SpeedsComponent {
  
  value: any;
  fromUnit: any;
  toUnit: any;
  convertedValue: string = 'Resultado: 0 Metros por segundo';

  constructor() {}

  convertSpeed() {
    const value = this.value;

    if (isNaN(value)) {
      this.convertedValue = 'Por favor, ingresa un valor válido.';
      return;
    }

    let result = 0;

    const fromUnit = this.fromUnit;
    const toUnit = this.toUnit;

    if (fromUnit === toUnit) {
      this.convertedValue = `El valor es el mismo: ${value} ${toUnit}`;
      return;
    }

    switch (fromUnit) {
      case 'metrosPorSegundo':
        if (toUnit === 'kilometrosPorHora') {
          result = value * 3.6;
        } else if (toUnit === 'millasPorHora') {
          result = value * 2.23694;
        } else if (toUnit === 'nudos') {
          result = value * 1.94384;
        } else if (toUnit === 'mach') {
          result = value / 343.58;
        }
        break;
      case 'kilometrosPorHora':
        if (toUnit === 'metrosPorSegundo') {
          result = value / 3.6;
        }
        break;
      case 'millasPorHora':
        if (toUnit === 'metrosPorSegundo') {
          result = value / 2.23694;
        }
        break;
      default:
        break;
    }

    this.convertedValue = `Resultado: ${result.toFixed(2)} ${toUnit}`;
  }
}