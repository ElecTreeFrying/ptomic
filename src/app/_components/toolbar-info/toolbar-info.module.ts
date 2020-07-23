import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarInfoComponent } from './toolbar-info.component';
import { ToolbarInfoMaterialModule } from '../../_common/material/toolbar-info-material.module';


@NgModule({
  declarations: [
    ToolbarInfoComponent
  ],
  imports: [
    CommonModule,
    ToolbarInfoMaterialModule
  ],
  exports: [
    ToolbarInfoComponent
  ]
})
export class ToolbarInfoModule { }
