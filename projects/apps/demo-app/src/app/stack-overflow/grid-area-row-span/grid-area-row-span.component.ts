import {Component, ChangeDetectionStrategy} from '@angular/core';

const DIRECTIONS = ['', '-reverse'];

@Component({
  standalone: false,
  selector: 'demo-grid-area-row-span',
  templateUrl: './grid-area-row-span.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./grid-area-row-span.component.scss']
})
export class GridAreaRowSpanComponent {
  direction = '';

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}
