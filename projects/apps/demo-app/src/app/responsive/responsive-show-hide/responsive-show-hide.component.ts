import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-responsive-show-hide',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './responsive-show-hide.component.html'
})
export class ResponsiveShowHideComponent {}
