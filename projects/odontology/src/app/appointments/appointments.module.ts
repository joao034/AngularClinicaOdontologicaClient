import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { AppointmentsRoutingModule } from './appoinments-rounting.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule
  ],
  exports: [
    FormComponent
  ]
  
})
export class AppointmentsModule { }
