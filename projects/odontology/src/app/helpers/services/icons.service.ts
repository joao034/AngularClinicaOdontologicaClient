import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface IIcon{
  name: string
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private iconList: IIcon[] = [
    {name: 'dashboard', path: '../assets/icons/dashboard.svg'},
    {name: 'department', path: '../assets/icons/department.svg'},
    {name: 'dentist', path: '../assets/icons/dentist.svg'},
    {name: 'patient_color', path: '../assets/icons/patient_color.svg'},
    {name: 'appointment', path: '../assets/icons/appointment.svg'},
    {name: 'info', path: '../assets/icons/info.svg'},
  ]
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    this.registryIcons();
  }

  registryIcons(){
    this.iconList.forEach((icon) =>{
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    })
  }
}
