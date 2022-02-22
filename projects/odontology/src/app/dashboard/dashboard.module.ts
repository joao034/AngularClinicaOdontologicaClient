import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageReportsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
