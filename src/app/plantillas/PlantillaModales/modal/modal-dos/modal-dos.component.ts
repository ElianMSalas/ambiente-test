import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-modal-dos',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIcon, MatDividerModule],
  templateUrl: './modal-dos.component.html',
  styleUrl: './modal-dos.component.scss'
})
export class ModalDosComponent {
  constructor(private dialogRef: MatDialogRef<ModalDosComponent>) {}

  close(): void {
    this.dialogRef.close();  // Cierra el modal cuando se haga clic en "Entendido"
  }
}
