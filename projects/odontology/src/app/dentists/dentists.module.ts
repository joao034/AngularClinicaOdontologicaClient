import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { DentistsRoutingModule } from './dentists-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from '../dentists/components/form/form.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    DentistsRoutingModule,
    SharedModule,

  ],
  exports: [
    FormComponent
  ]
  
})
export class DentistsModule { }
