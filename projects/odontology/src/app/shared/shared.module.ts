import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './components/paginator/paginator-es';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { KeypadComponent } from './components/keypad/keypad.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DownloadComponent } from './components/download/download.component'
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
   
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    KeypadComponent,
    DownloadComponent,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      
      {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ]
})
export class SharedModule { }
