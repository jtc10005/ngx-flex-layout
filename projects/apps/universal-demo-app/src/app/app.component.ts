import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'responsive-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsive';
}
