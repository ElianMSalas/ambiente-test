import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  displayedColumns: string[] = ['tipo', 'ejemplo'];
  dataSource = [
    { tipo: 'Botón Primario' },
    { tipo: 'Botón Secundario' },
    { tipo: 'Botón Deshabilitado' },
    { tipo: 'Botón Solo Vista Móvil' },
    { tipo: 'Botón Solo con Ícono (Burger Button)' },
    { tipo: 'Botones Compuestos' },
    { tipo: 'Botón en Tabla' },
    { tipo: 'Botón de Acción Comercial' }
  ];
}
