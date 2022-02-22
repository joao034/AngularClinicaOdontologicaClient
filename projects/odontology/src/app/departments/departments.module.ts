import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule
  ]
})
export class DepartmentsModule { }
