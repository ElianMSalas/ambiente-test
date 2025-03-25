import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  displayedColumns: string[] = ['ejemplo', 'tipo', ];
  dataSource = [
    { tipo: 'El checkbox indica que algunas opciones bajo su jerarquía están seleccionadas' },
    { tipo: 'El checkbox está deseleccionado pero habilitado para poder usarlo' },
    { tipo: 'El checkbox está seleccionado y habilitado en caso de deseleccionar' },
    { tipo: 'El checkbox está dehabilitado para cualquier acción' },
    { tipo: 'El checkbox está desabilitado con una opción obligatoria ya seleccionada' },

  ];

  onCheckboxChange(event: any) {
    console.log('Checkbox cambiado:', event);
  }
}
