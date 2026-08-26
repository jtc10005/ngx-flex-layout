import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'demo-issue-135',
  templateUrl: './issue-135.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class Issue135Component {}
