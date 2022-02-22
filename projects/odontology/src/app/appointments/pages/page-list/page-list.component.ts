import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'odonto-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private utilsService:UtilsService) { }

  keypadButtons : KeyPadButton[] = [
    {
      icon : "cloud_download",
      tooltip: "DESCARGAR",
      color: "accent",
      action: "DOWNLOAD"
    },

    {
      icon : "add",
      tooltip: "AGREGAR",
      color: "primary",
      action: "NEW"
    }

  ]
  title = "Citas Odontológicas"
  
  //Agregar estado
  data: any[] = [
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},{id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},{id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},{id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
    {id: 1, fecha: '12/11/2021 - 9:00h', paciente:'Juan Cáceres', dentista:'Anita Aguilar', descripcion: 'Calzado de muelas', departamento: 'Consultorio General 1', estado: 'Atendida'},
    {id: 2, fecha: '12/11/2021 - 10:00h', paciente:'Lucía Jaitia', dentista:'Juan Sánchez', descripcion: 'Extracción tercer molar', departamento: 'Quirófano Dental', estado: 'Por atender'},
    {id: 3, fecha: '12/11/2021 - 11:00h', paciente:'María López', dentista:'Anita Aguilar', descripcion: 'Implantes dentales', departamento: 'Quirófano Dental', estado: 'Atendida'},
    {id: 4, fecha: '12/11/2021 - 12:00h', paciente:'Alison Medina', dentista:'Anita Aguilar', descripcion: 'Limpieza profunda', departamento: 'Consultorio General 2', estado: 'Por atender'},
    {id: 5, fecha: '12/11/2021 - 13:00h', paciente:'Sebastián Carrasco', dentista:'Estefanny Gómez', descripcion: 'Revisión ortodoncia', departamento: 'Consultorio General 1', estado: 'Cancelada'},
  ]



  //listFields: string [] = ['id', 'fecha', 'paciente', 'dentista', 'descripcion', 'departamento', 'estado']
  metaDataColumns : MetaDataColumn[] = [
    {field: 'id', title: 'Id'},
    {field: 'fecha', title: 'Fecha-Hora'},
    {field: 'paciente', title: 'Paciente'},
    {field: 'dentista', title: 'Dentista'},
    {field: 'descripcion', title: 'Descripción'},
    {field: 'departamento', title: 'Departamento'},
    {field: 'estado', title: 'Estado'},
  ]

  temporalData:any[]=this.data

  ngOnInit(): void {
    this.temporalData = this.data.slice(0,10)
  }

  //Atributos paginator
  number !: number[]
  size=0
  index=0
  files=0
  end=0
  
  nextPage(number: number[]){
    this.size=number[1]
    this.index=number[0]
    this.files=this.size*this.index  
    this.end=this.files+this.size
    this.temporalData = this.data.slice(this.files,this.end)
  }

  length=this.data.length


  //Boton editar eliminar
  openForm(row: any){

  }

  delete(row: any){

  }

  doAction(action:string){
    switch(action){
      case 'DOWNLOAD':
        this.utilsService.showBottonSheet()
        break
      
      case 'NEW':
        //this.utilsService.showFormModal()
        break
    }
  }

}
