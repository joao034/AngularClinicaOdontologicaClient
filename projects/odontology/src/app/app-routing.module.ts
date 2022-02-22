import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';


const routes: Routes = [
  {path : '', component: PageLoginComponent},
  {path : 'dashboard', 
   loadChildren:() => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)},
  {path : 'departments', 
  loadChildren:() => import('./departments/departments.module').then((m) => m.DepartmentsModule)},
  {path : 'dentists', 
   loadChildren:() => import('./dentists/dentists.module').then((m) => m.DentistsModule)},
  {path : 'patients', 
  loadChildren:() => import('./patients/patients.module').then((m) => m.PatientsModule)},
  {path : 'appointments', 
   loadChildren:() => import('./appointments/appointments.module').then((m) => m.AppointmentsModule)},
   {path : 'info', 
   loadChildren:() => import('./info/info.module').then((m) => m.InfoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules }),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
