import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { VERSION } from 'ngx-flexible-layout';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AppComponent {
  version = VERSION.full;
}
