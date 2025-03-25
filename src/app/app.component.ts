import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsNavigatorComponent } from './components-navigator/components-navigator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsNavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ambiente-angular';
}
