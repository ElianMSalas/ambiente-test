import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  startDate: any = null; 
  isTouched: boolean = false; // Para controlar el estado tocado del campo

  ngOnInit() {
    // En este caso, se establece el valor nulo para mostrar el error desde el inicio
    this.isTouched = true; // Marca el campo como tocado al cargar el componente
  }

  // Añadimos la variable endDate como en el ejemplo original
  endDate: any;

  // Tabla de ejemplo que se usa para otros fines
  displayedColumns: string[] = ['datepicker', 'tipos'];
  dataSource = [
    {
      datepicker: 'Escoge una fecha',
      tipos: 'Selección de fecha unitaria e ícono. Generalmente se usa con el ícono de calendario, también se permite el uso de otros iconos, tales como la flecha. Mensaje descriptivo personalizado según la interfaz o sitio web.',
      example: 1
    },
    {
      datepicker: 'Escoge una fecha',
      tipos: 'Selección de fecha unitaria. Generalmente se usa con el ícono de calendario, también se permite el uso de otros iconos, tales como la flecha. Mensaje descriptivo personalizado según la interfaz o sitio web.',
      example: 2
    },
    {
      datepicker: 'Ingresa un periodo de tiempo',
      tipos: 'Generalmente se usa con el ícono de calendario, también se permite el uso de otros iconos, tales como la flecha. Se pueden comparar dos periodos de tiempo en caso de ser necesario. Mensaje descriptivo personalizado según la interfaz o sitio web.',
      example: 3
    },
    {
      datepicker: 'Ingresa un periodo de tiempo',
      tipos: 'Se muestra el estado de error que se debe replicar en cualquier otro formato de ingreso de fechas o periodos. Generalmente se usa con el ícono de calendario, también se permite el uso de otros iconos, tales como la flecha. Mensaje descriptivo personalizado según la interfaz o sitio web.',
      example: 4
    },
    {
      datepicker: 'Ingresa un periodo de tiempo',
      tipos: 'Se muestra el estado de deshabilitado que se debe replicar en cualquier otro formato de ingreso de fechas o periodos. Generalmente se usa con el ícono de calendario, también se permite el uso de otros iconos, tales como la flecha. Mensaje descriptivo personalizado según la interfaz o sitio web.',
      example: 5
    }
  ];
}
