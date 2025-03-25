import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalUnoComponent } from './modal/modal-uno/modal-uno.component';
import { ModalDosComponent } from './modal/modal-dos/modal-dos.component';
import { CodeViewerComponent } from '../code-viewer/code-viewer.component';

@Component({
  selector: 'app-plantilla-uno',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ModalUnoComponent, CodeViewerComponent],
  templateUrl: './PlantillaModales.component.html',
  styleUrls: ['./PlantillaModales.component.scss']
})
export class PlantillaUnoComponent {
  codeHtml = `\n<div mat-dialog-actions close>
  <button mat-icon-button mat-dialog-close style="position: absolute; right: 10px; top: 10px;">
      <mat-icon>close</mat-icon> <!-- Icono de la "X" -->
  </button>
</div>
<div mat-dialog-title>
    <h2>No hay avisos para hoy 29/10/2024</h2>
    <!-- Botón de cerrar en la parte superior derecha -->
</div>
  
<div mat-dialog-content class="content">
  <p>Se mostrarán los de la última fecha con publicaciones disponibles.</p>
</div>
  
<div mat-dialog-actions>
  <!-- Botón de "Entendido" con mat-accent -->
  <button mat-raised-button color="accent" (click)="close()">Entendido</button>
</div>`;
  
  codeTs = `\nimport { Component } from '@angular/core';
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
}`;
  codeScss =`\n.mat-mdc-dialog-title {
  display: flex;
  justify-content: center;
  position: relative; // Para que el botón de cerrar se mantenga bien posicionado
}

.content {
  text-align: center;
}

.mat-mdc-dialog-actions {
  padding-top: 8px; // top: 8px, left y right: 8px, bottom: 30px
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center; // Centrar el botón
}
.mat-mdc-dialog-content {
  padding-left: 24px;
  padding-right: 24px; // left y right de 24px, bottom de 20px
  padding-bottom: 20px;
  margin-bottom: 10px;
}

.close-button {
  width: 48px;
  height: 48px;
}`;

  codeHtml2 = `\n<div mat-dialog-actions close>
  <button mat-icon-button mat-dialog-close style="position: absolute; right: 10px; top: 10px;">
    <mat-icon>close</mat-icon> <!-- Icono de la "X" -->
  </button>
</div>

<div class="item-center">
  <img src="assets/imagenes_general/info.png" class="info">
</div>

<div mat-dialog-title>
  <div class="title-content">
    <h1>Información de cartolas</h1>
    <p class="center-text">Tienes pendiente cargar las siguientes cartolas</p>
  </div>
</div>

<div mat-dialog-content class="content">
  <h4>Numero de cartolas faltantes: <span class="number">3</span></h4>
  <h4>Fecha de cartolas faltantes: </h4><p>DD/MM/AAAA - DD/MM/AAAA - DD/MM/AAAA</p>
  <mat-divider></mat-divider>
  <p class="center-text">Comunícate con la entidad bancaria para gestionar o corregir tus cartolas.</p>
</div>`;
  codeTs2 = `\nimport { Component } from '@angular/core';
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
}`;
  codeScss2 = `\n.mat-dialog-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .title-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .mat-dialog-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0;
  }

  .mat-dialog-content h4,
  .mat-dialog-content p.number {
    display: inline;
    margin: 0;  // Elimina márgenes si es necesario
  }

  
  .center-text {
    text-align: center;
    color: #333;  // Asumiendo que este es el color que deseas para los párrafos
  }
  
  .number {
    color: inherit;  // Hace que el color del <span> sea el mismo que el del <p>
  }
  
  .item-center {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .mat-divider {
    padding-top: 20px;
  }
  
  .info {
    width: 70px;
  }`;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalUnoComponent);  // Abre el ModalUnoComponent

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(ModalDosComponent);  // Abre el ModalDosComponent

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
