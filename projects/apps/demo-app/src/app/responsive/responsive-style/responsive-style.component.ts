import {Component} from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-responsive-style',
  templateUrl: './responsive-style.component.html'
})
export class ResponsiveStyleComponent {
  hasStyle = false;
  styleLgExp = {
    'font-size': '40px',
    color: 'lightgreen'
  };
}
