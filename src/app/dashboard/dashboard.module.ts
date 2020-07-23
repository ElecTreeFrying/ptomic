import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMaterialModule } from '../_common/material/dashboard-material.module';
import { ToolbarInfoModule } from '../_components/toolbar-info/toolbar-info.module';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    ToolbarInfoModule
  ]
})
export class DashboardModule { }
