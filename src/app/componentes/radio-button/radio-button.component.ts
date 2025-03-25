import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    FormsModule, 
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterOutlet,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    CommonModule
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  respuestaCliente: string = '';
  respuestas: string[] = ['Bajo', 'Medio', 'Alto'];
    // Variables para la interaccion de los campos RUT y ROL
    panelOpen = false;
    selBusqueda: string = 'rut';
    inputRUT: string = '';
    inputROL: string = '';
  
    selRadioButton(valor: string) {
      this.selBusqueda = valor;
      this.inputRUT = '';
      this.inputROL = '';
    }
}
