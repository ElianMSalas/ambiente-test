import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

export interface ToggleExample {
  badgeText: string;
  tipos: string;
}

const ELEMENT_DATA: ToggleExample[] = [
  { tipos: 'Toggle único: Una sola opción seleccionable.' , badgeText: 'Toggle único: Una sola opción seleccionable.' },
  { tipos: 'Toggle múltiple: Varias opciones seleccionables.' , badgeText: 'Toggle múltiple: Varias opciones seleccionables.' },
];

@Component({
  selector: 'app-buttons-toggle',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonToggleModule, MatIconModule, FormsModule],
  templateUrl: './buttons-toggle.component.html',
  styleUrls: ['./buttons-toggle.component.scss']
})
export class ButtonsToggleComponent {
  displayedColumns: string[] = ['tipos', 'buttons toggle'];
  dataSource = ELEMENT_DATA;

  selectedToggle: string | null = null; // Para el toggle único
  selectedMultiple: string[] = []; // Para el toggle múltiple (debe ser un arreglo)
}
