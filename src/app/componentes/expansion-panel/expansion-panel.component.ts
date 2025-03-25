import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

export interface ExpansionPanelExample {
  tipos: string;
}

const ELEMENT_DATA: ExpansionPanelExample[] = [
  { tipos: 'Expansion panel cerrado, modo default' },
  { tipos: 'Expansion panel cerrado, modo focus' },
  { tipos: 'Expansion panel cerrado, modo deshabilitado' },
  { tipos: 'Expansion panel abierto, modo active' },
  { tipos: 'Expansion panel abierto, modo active focus' },
];

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatExpansionModule, FormsModule],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  displayedColumns: string[] = ['expansion panel', 'tipos'];
  dataSource = ELEMENT_DATA;

  onFocus() {
    console.log("El panel ha recibido foco.");
  }
}
