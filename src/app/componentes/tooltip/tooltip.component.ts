import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

}
