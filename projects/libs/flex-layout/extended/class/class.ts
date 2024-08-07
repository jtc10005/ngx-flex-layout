/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgClass } from '@angular/common';
import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  Optional,
  Renderer2,
  Self
} from '@angular/core';
import { BaseDirective2, MediaMarshaller, StyleUtils } from 'ngx-flexible-layout/core';

@Directive()
export class ClassDirective extends BaseDirective2 implements DoCheck {

  protected override DIRECTIVE_KEY = 'ngClass';

  /**
   * Capture class assignments so we cache the default classes
   * which are merged with activated styles and used as fallbacks.
   */
  @Input('class')
  set klass(val: string) {
    this.ngClassInstance.klass = val;
    this.setValue(val, '');
  }

  constructor(elementRef: ElementRef,
    styler: StyleUtils,
    marshal: MediaMarshaller,
    iterableDiffers: IterableDiffers,
    keyValueDiffers: KeyValueDiffers,
    renderer2: Renderer2,
    @Optional() @Self() protected readonly ngClassInstance: NgClass) {
    super(elementRef, null!, styler, marshal);
    if (!this.ngClassInstance) {
      // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
      // the same host element; since the responsive variations may be defined...
      //////////////////////////////////////////////////////////////////////////////////////////////
      // Upgrade to Angular 18 broke this
      //https://github.com/angular/angular/commit/1be6b0a58a9e96f9f0bda8acb63c701f792e469b
      // this.ngClassInstance = new NgClass(iterableDiffers, keyValueDiffers, elementRef, renderer2);
      //////////////////////////////////////////////////////////////////////////////////////////////

      this.ngClassInstance = new NgClass(elementRef, renderer2);
    }
    this.init();
    this.setValue('', '');
  }

  protected override updateWithValue(value: any) {
    this.ngClassInstance.ngClass = value;
    this.ngDoCheck();
  }

  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************

  /**
   * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
   */
  ngDoCheck() {
    // ngDoCheck only to applicable renderers
    if (this.ngClassInstance["_renderer"] && "addClass" in this.ngClassInstance["_renderer"])
      this.ngClassInstance.ngDoCheck();
  }
}

const inputs = [
  'ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl',
  'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl',
  'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'
];

const selector = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;

/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
@Directive({ selector, inputs })
export class DefaultClassDirective extends ClassDirective {
  protected override inputs = inputs;
}
