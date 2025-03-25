import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    MatTableModule,
    MatChipsModule, // Añadir MatChipModule para usar chips
    CommonModule
  ],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  displayedColumns: string[] = ['chip', 'casoDeUso', 'otrosConceptos'];

  dataSource = [
    {
      chip: 'Estado Exitoso',
      casoDeUso: 'Utilizar para comunicar estados que reflejen estado final y exitoso de un proceso.',
      otrosConceptos: 'Inscrito, Ingresado, Activo, Terminado, Registrado, Finalizado, Completado.'
    },
    {
      chip: 'Estado Temporal',
      casoDeUso: 'Utilizar para comunicar estados que reflejen un estado temporal dentro de un flujo normal.',
      otrosConceptos: 'En espera, Pendiente.'
    },
    {
      chip: 'Final No Exitoso',
      casoDeUso: 'Utilizar para comunicar estados finales diferentes al exitoso.',
      otrosConceptos: 'Detenido, Cerrado, Denegado, Rechazado, No procesado.'
    },
    {
      chip: 'Estado Parcial',
      casoDeUso: 'Utilizar para comunicar progreso o estados terminales parciales.',
      otrosConceptos: 'En desarrollo, En curso, En progreso, En ejecución, Parcialmente.'
    },
    {
      chip: 'Estado Inicial',
      casoDeUso: 'Utilizar para comunicar estados iniciales en un flujo normal.',
      otrosConceptos: 'Inicio.'
    },
    {
      chip: 'Temporal No Exitoso',
      casoDeUso: 'Utilizar para comunicar estados que reflejen un estado temporal dentro de un flujo alternativo diferente al exitoso.',
      otrosConceptos: 'Suspendido, interrumpido.'
    }
  ];

  // Método que devuelve el color del chip según su valor
  getChipColor(chip: string): string {
    switch (chip) {
      case 'Estado Exitoso':
        return '#96FFC6';
      case 'Estado Temporal':
        return '#FFF48B';
      case 'Final No Exitoso':
        return '#FFCFD9';
      case 'Estado Parcial':
        return '#A8ECFF';
      case 'Estado Inicial':
        return '#E6D4FF';
      case 'Temporal No Exitoso':
        return '#FAD78B';
      default:
        return '#ffffff'; // Color predeterminado en caso de que no haya coincidencia
    }
  }
}
