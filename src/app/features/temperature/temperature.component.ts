import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatSelectModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  temperature: any;
  fromUnit: any;
  toUnit:any;
  convertedValue: string = 'Resultado: 0 Celsius';

  constructor() {}

  convertTemperature() {
    const temperature = this.temperature;

    if (isNaN(temperature)) {
      this.convertedValue = 'Por favor, ingresa una temperatura válida.';
      return;
    }

    let result = 0; 

    const fromUnit = this.fromUnit;
    const toUnit = this.toUnit;

    if (fromUnit === toUnit) {
      this.convertedValue = `La temperatura es la misma: ${temperature} ${toUnit}`;
      return;
    }

    if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = temperature - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = ((temperature - 273.15) * 9) / 5 + 32;
      }
    } else if (fromUnit === 'celsius') {
      if (toUnit === 'kelvin') {
        result = temperature + 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = (temperature * 9) / 5 + 32;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = ((temperature - 32) * 5) / 9;
      } else if (toUnit === 'kelvin') {
        result = ((temperature - 32) * 5) / 9 + 273.15;
      }
    }

    this.convertedValue = `Resultado: ${result.toFixed(2)} ${toUnit}`;
  }
}