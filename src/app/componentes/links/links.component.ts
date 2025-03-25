import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule, FormsModule],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  // Definir las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['enlace', 'tipo'];

  // Definir los datos de la tabla
  dataSource = [
    {
      tipo: 'Enlace estándar: Redirige a una página o recurso.',
      enlace: 'https://v17.material.angular.io/components' // Esta URL se utiliza en el ejemplo de Enlace Estándar
    },
    {
      tipo: 'Enlace con ícono: Redirige a una página y abre en una nueva pestaña.',
      enlace: 'https://v17.material.angular.io/' // Esta URL se utiliza en el ejemplo de Enlace con ícono
    }
  ];
}
