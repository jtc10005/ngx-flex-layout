import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from 'ngx-flex-layout';
import { DocsLayoutComponent } from './docs-layout/docs-layout.component';
import { FlexAlignSelfComponent } from './flex-align-self/flex-align-self.component';
import {
  FlexAttributeValuesComponent
} from './flex-attribute-values/flex-attribute-values.component';
import { FlexOffsetValuesComponent } from './flex-offset-values/flex-offset-values.component';
import { FlexRowFillWrapComponent } from './flex-row-fill-wrap/flex-row-fill-wrap.component';
import { FlexRowFillComponent } from './flex-row-fill/flex-row-fill.component';
import { LayoutAlignmentComponent } from './layout-alignment/layout-alignment.component';
import { LayoutFillComponent } from './layout-fill/layout-fill.component';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';
import {
  LayoutWithDirectionComponent
} from './layout-with-direction/layout-with-direction.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule,
    RoutingModule
  ],
  declarations: [
    DocsLayoutComponent,
    LayoutAlignmentComponent,
    LayoutFillComponent,
    FlexRowFillComponent,
    FlexRowFillWrapComponent,
    FlexAttributeValuesComponent,
    FlexOffsetValuesComponent,
    FlexAlignSelfComponent,
    LayoutWithDirectionComponent,
    LayoutGapComponent,
  ]
})
export class DocsLayoutModule {}
