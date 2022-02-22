import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule
  ]
})
export class PatientsModule { }
