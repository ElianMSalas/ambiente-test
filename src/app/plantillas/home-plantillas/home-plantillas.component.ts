import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-plantillas',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule, RouterModule], 
  templateUrl: './home-plantillas.component.html',
  styleUrls: ['./home-plantillas.component.scss'],
})
export class HomePlantillasComponent {
}
