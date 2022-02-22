import { Injectable } from '@angular/core';

export interface IMenu{
  title: string,
  icon: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[]= [
    {title: 'Dashboard', url:'/dashboard', icon: 'dashboard'},
    {title: 'Departamentos', url:'/departments', icon: 'department'},
    {title: 'Odontólogos', url:'/dentists', icon: 'dentist'},
    {title: 'Pacientes', url:'/patients', icon: 'patient_color'},
    {title: 'Citas', url:'/appointments', icon: 'appointment'},
    {title: 'Información', url: '/info', icon: 'info'},
  ]
  constructor() { }

  getMenu(): IMenu[]{
    return [...this.listMenu]
  }

  getMenuByUrl(url: string): IMenu{
    return this.listMenu.find
    ((menu) => menu.url.toLowerCase() === url.toLowerCase()
    )as IMenu
  }
}
