import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: false,
  selector: 'demo-stack-overflow',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <demo-hide-custom-bp></demo-hide-custom-bp>
    <demo-moz-holy-grail class='small-demo'></demo-moz-holy-grail>
    <demo-complex-column-ordering></demo-complex-column-ordering>
    <demo-grid-area-row-span></demo-grid-area-row-span>
    <demo-grid-column-span></demo-grid-column-span>
  `
})
export class StackOverflowComponent {}
