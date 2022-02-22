import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { InfoRoutingModule } from './info-routing.module';



@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
