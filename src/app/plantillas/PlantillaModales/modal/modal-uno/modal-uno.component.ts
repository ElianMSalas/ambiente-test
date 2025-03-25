import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-modal-uno',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIcon],
  templateUrl: './modal-uno.component.html',
  styleUrls: ['./modal-uno.component.scss'],
})
export class ModalUnoComponent {
  constructor(private dialogRef: MatDialogRef<ModalUnoComponent>) {}

  close(): void {
    this.dialogRef.close();  // Cierra el modal cuando se haga clic en "Entendido"
  }
}
