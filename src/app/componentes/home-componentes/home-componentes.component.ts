import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-componentes',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './home-componentes.component.html',
  styleUrls: ['./home-componentes.component.scss'],
})
export class HomeComponentesComponent {

}
