import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonToggleModule, MatIconModule, MatButtonModule]
})
export class CodeViewerComponent {
  @Input() codeHtml: string = '';
  @Input() codeTs: string = '';
  @Input() codeScss: string = '';

  selectedTab: 'html' | 'ts' | 'scss' = 'html';
  copied: boolean = false;

  onTabChange(tab: 'html' | 'ts' | 'scss') {
    this.selectedTab = tab;
  }

  getCodeContent(): string {
    return this.selectedTab === 'html' ? this.codeHtml 
         : this.selectedTab === 'ts' ? this.codeTs 
         : this.codeScss;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.getCodeContent()).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000); // Oculta el mensaje después de 2 segundos
    }).catch(err => console.error('Error al copiar el código:', err));
  }
}
