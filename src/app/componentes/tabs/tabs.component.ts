import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Importación del módulo MatTable
import { CommonModule } from '@angular/common'; // Importación de CommonModule

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTableModule, CommonModule], // Agregado MatTableModule y CommonModule
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  displayedColumns: string[] = ['tab', 'tipos']; // Columnas que se mostrarán
  tabsInfo = [
    { 
      tab: 'Tab Activo (Seleccionado)', 
      tipos: 'El usuario selecciona el tab y su contenido se está mostrando.'
    },
    { 
      tab: 'Tab Inactivo (No seleccionado)', 
      tipos: 'El tab está disponible, pero su contenido no se está mostrando.'
    },
    { 
      tab: 'Tab Deshabilitado', 
      tipos: 'El tab aparece en la interfaz, pero no es interactuable.'
    }
  ]; // Cada fila contiene un solo tab y su descripción
}
