import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-moz-holy-grail',
  templateUrl: './moz-holy-grail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./moz-holy-grail.component.scss']
})
export class MozHolyGrailComponent {
  direction = 'row';

  toggleDirection() {
    this.direction = (this.direction === 'column') ? 'row' : 'column';
  }
}
