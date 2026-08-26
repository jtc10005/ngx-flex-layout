import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-responsive-style',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './responsive-style.component.html'
})
export class ResponsiveStyleComponent {
  hasStyle = false;
  styleLgExp = {
    'font-size': '40px',
    color: 'lightgreen'
  };
}
