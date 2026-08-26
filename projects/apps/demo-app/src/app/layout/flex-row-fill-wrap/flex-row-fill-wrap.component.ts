import {Component, ChangeDetectionStrategy} from '@angular/core';

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

@Component({
  standalone: false,
  selector: 'demo-flex-row-fill-wrap',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './flex-row-fill-wrap.component.html'
})
export class FlexRowFillWrapComponent {
  direction = 'row';

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}
