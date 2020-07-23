import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayMaterialModule } from '../_common/material/display-material.module';
import { ToolbarInfoModule } from '../_components/toolbar-info/toolbar-info.module';

import { DisplayComponent } from './display.component';


@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DisplayRoutingModule,
    DisplayMaterialModule,
    ToolbarInfoModule,
  ]
})
export class DisplayModule { }
