import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  displayedColumns: string[] = ['tipo', 'input'];
  dataSource = [
    { tipo: 'Input simple: El input está vacío y no tiene foco.' },
    { tipo: 'Input con focus: La etiqueta label se desplaza cuando se da foco.' },
    { tipo: 'Input activo: La etiqueta label permanece elevada.' },
    { tipo: 'Input rellenado: El input ya contiene información.' },
    { tipo: 'Input con requisito no cumplido: Error en el formato.' },
    { tipo: 'Input con icono: El input incluye un icono.' },
    { tipo: 'Input deshabilitado: El input no permite la edición.' },
    { tipo: 'Input de solo lectura: El input no puede ser modificado.' }
  ];

  // Variables de ejemplo para los inputs
  activeInput: string = '';
  filledInput: string = 'Texto ingresado';
  error: boolean = true;

  onFocus() {
    console.log('Input con foco');
  }
}
