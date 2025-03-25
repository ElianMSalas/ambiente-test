import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-solo-testeo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solo-testeo.component.html',
  styleUrls: ['./solo-testeo.component.scss']
})
export class SoloTesteoComponent {
  isOpen = false;
  total = 11;

  tasks = [
    { label: 'Notificar y Embargar', value: '1' },
    { label: 'Embargo', value: '1' },
    { label: 'Notificación 2° Etapa', value: '1' },
    { label: 'Retiro', value: '1' },
    { label: 'Otra', value: '1', annotation: 'lo 1' },
    { label: 'Fallecido', value: '1' },
    { label: 'Inscripción', value: '1' },
    { label: 'Diligencia (Otras)', value: '1' },
    { label: 'Embargo (Otras)', value: '1' },
    { label: '2° Etapa de Cobro', value: '1', annotation: 'da C' },
    { label: 'Excepción', value: '1' }
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.custom-select')) {
      this.isOpen = false;
    }
  }
}