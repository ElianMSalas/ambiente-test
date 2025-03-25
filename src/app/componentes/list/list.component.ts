import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] = ['list', 'tipos'];

  dataSource = [
    {
      list: 'Lista básica',
      tipos: 'Se utiliza para mostrar ítems de forma sencilla y alineados verticalmente de forma homogénea. Si un elemento de la lista necesita mostrar una sola línea de información textual, el texto se inserta directamente en el <mat-list-item>.'
    },
    {
      list: 'Lista anidada',
      tipos: 'Las listas pueden ser anidadas, lo que significa que un elemento puede tener subniveles (hijos). Los elementos con más de una línea de texto deben usar matListItemTitle para el título y matListItemLine para cada línea adicional.'
    },
    {
      list: 'Lista con ícono',
      tipos: 'Se puede agregar un ícono a la lista para complementar los elementos. Utiliza el atributo matListItemIcon para cada elemento con ícono.'
    },
    {
      list: 'Lista con ícono y bajada',
      tipos: 'Se pueden agregar subtítulos a una lista con el atributo matSubheader. Para agregar un divisor, utiliza <mat-divider>.'
    },
    {
      list: 'Lista básica con descripción',
      tipos: 'Los ítems pueden tener etiqueta y descripción, como "Barquillo: Dulce crujiente". Se puede destacar la etiqueta con <strong>.'
    },
    {
      list: 'Lista con selección múltiple',
      tipos: 'Las listas pueden incluir componentes como checkboxes o radio buttons para permitir la selección de múltiples elementos.'
    }
  ];
}
