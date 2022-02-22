import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from '../../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatListModule} from '@angular/material/list'; 
import {RouterModule} from '@angular/router' 
import { HttpClient, HttpClientModule } from '@angular/common/http';

const RECAPTCHA_V2_DUMMY_KEY = environment.keyRecaptcha;

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    PageLoginComponent,
    FlexLayoutModule,
    HeaderComponent,
    MenuComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],

  providers:[
    {
      provide: RECAPTCHA_SETTINGS,
      useValue:{
        siteKey: RECAPTCHA_V2_DUMMY_KEY,
      } as RecaptchaSettings
    }
  ]
})
export class CoreModule { }
