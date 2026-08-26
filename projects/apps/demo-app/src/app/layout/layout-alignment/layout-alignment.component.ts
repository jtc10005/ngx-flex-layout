import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-layout-alignment',
  templateUrl: './layout-alignment.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./layout-alignment.component.scss']
})
export class LayoutAlignmentComponent {
  options = {
    direction :  'row',
    mainAxis  : 'space-around',
    crossAxis :  'center'
  };

  layoutAlign() {
    return `${this.options.mainAxis} ${this.options.crossAxis}`;
  }
}
