import { Component } from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule, ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

}
