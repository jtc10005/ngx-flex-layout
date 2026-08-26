import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'demo-issue-266',
  templateUrl: './issue-266.component.html',
  styleUrls: ['./issue-266.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class Issue266Component {}
