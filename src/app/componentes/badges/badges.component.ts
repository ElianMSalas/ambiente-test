import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

export interface Badges {
  badgeText: string; // Texto del badge
  badgeCount: number; // Contador para el badge
  tipos: string;
}

const ELEMENT_DATA: Badges[] = [
  { badgeText: 'Texto con un badge', badgeCount: 4, tipos: 'Text with a badge' },
  { badgeText: 'Botón con badge a la izquierda', badgeCount: 2, tipos: 'Button with a badge on the left' },
  { badgeText: 'Botón que alterna la visibilidad del badge', badgeCount: 1, tipos: 'Button toggles badge visibility' },
  { badgeText: 'Icono con badge', badgeCount: 5, tipos: 'Icon with a badge' },
];

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [MatBadgeModule, MatIconModule, MatButtonModule, MatTableModule, CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent {
  displayedColumns: string[] = ['badge', 'tipos'];
  dataSource = ELEMENT_DATA;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
