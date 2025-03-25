import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [
    MatDividerModule,
    MatTableModule,
    CommonModule
  ],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  // Datos de la tabla
  displayedColumns: string[] = ['divider', 'tipos'];
  dataSource = [
    {
      divider: 'Divider ejemplo1: divisor horizontal',
      tipos: 'Horizontal: línea de separación entre elementos de un contenedor apilado en columna.'
    },
    {
      divider: 'Divider ejemplo2: divisor vertical',
      tipos: 'Vertical: línea de separación cuando los elementos están organizados en filas.'
    }
  ];
}
