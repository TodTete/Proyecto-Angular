import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-distance',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatSelectModule],
  templateUrl: './distance.component.html',
  styleUrl: './distance.component.css'
})

export class DistanceComponent {
  
  inputValue: number = 0;
  fromUnit: string = 'metro';
  toUnit: string = 'metro';
  convertedValue: string;

  constructor() {
    this.inputValue = 0;
    this.fromUnit = 'metro';
    this.toUnit = 'metro';
    this.convertedValue = 'Resultado: 0 metro';
  }
  convertLength() {
    const value = parseFloat(this.inputValue.toString());
  
    if (isNaN(value)) {
      this.convertedValue = 'Por favor, ingresa un valor válido.';
      return;
    }
  
    let result = 0;
  
    switch (this.fromUnit) {
      case 'metro':
        result = this.convertFromMeter(value, this.toUnit);
        break;
      case 'yarda':
        const meters = value * 0.9144;
        result = this.convertFromMeter(meters, this.toUnit);
        break;
      case 'pie':
        const feet = value * 0.3048;
        result = this.convertFromMeter(feet, this.toUnit);
        break;
      case 'kilometro':
        const kilometers = value * 1000;
        result = this.convertFromMeter(kilometers, this.toUnit);
        break;
      case 'centimetro':
        result = this.convertFromCentimeter(value, this.toUnit);
        break;
      case 'pulgada':
        const inches = value * 0.0254;
        result = this.convertFromMeter(inches, this.toUnit);
        break;
      case 'legua':
        const leagues = value * 4828.03;
        result = this.convertFromMeter(leagues, this.toUnit);
        break;
      case 'milla':
        const miles = value * 1609.34;
        result = this.convertFromMeter(miles, this.toUnit);
        break;
      default:
        this.convertedValue = 'Unidad no válida.';
        return;
    }
  
    this.convertedValue = `Resultado: ${result.toFixed(2)} ${this.toUnit}`;
  }
  
  convertFromMeter(value: number, toUnit: string): number {
    switch (toUnit) {
      case 'metro':
        return value;
      case 'yarda':
        return value * 1.09361;
      case 'pie':
        return value * 3.28084;
      case 'kilometro':
        return value / 1000;
      case 'centimetro':
        return value * 100;
      case 'pulgada':
        return value * 39.3701;
      case 'legua':
        return value / 4828.03;
      case 'milla':
        return value / 1609.34;
      default:
        return value;
    }
  }
  
  convertFromCentimeter(value: number, toUnit: string): number {
    const meters = value / 100;
    return this.convertFromMeter(meters, toUnit);
  }
}