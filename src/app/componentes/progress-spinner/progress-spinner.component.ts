import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {

  displayedColumns: string[] = ['progressSpinner', 'tipos'];

  dataSource = [
    {
      progressSpinner: 'Uso indeterminado con mensaje indicativo de espera',
      tipos: 'Se usa cuando no se conoce la duración exacta de la espera. El spinner gira indefinidamente hasta que la acción finaliza.'
    },
    {
      progressSpinner: 'Uso determinado con mensaje indicativo de una acción',
      tipos: 'Se usa cuando se conoce el progreso de la acción. Se muestra un porcentaje o avance en el spinner.'
    },
    {
      progressSpinner: 'Uso indeterminado con mensaje indicativo de una acción, en horizontal',
      tipos: 'El spinner se muestra de manera horizontal junto a un mensaje, para indicar que una acción está en progreso sin tiempo definido.'
    }
  ];
}
