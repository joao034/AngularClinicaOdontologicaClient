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

  constructor(private utilsService : UtilsService) { }

  ngOnInit(): void {
  }

  title = "Lista de Departamentos/Consultorios"

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

  data: any[] = [
    {id: 1, nombre: 'Radiología', descripcion:'Departamento para la toma de radiografías (panorámicas, maxilofaciales, tomografías)'},
    {id: 2, nombre: 'Consultorio General 1', descripcion:'Consultorio de uso general para el control dental'},
    {id: 3, nombre: 'Consultorio General 2', descripcion:'Consultorio de uso general para el control dental'},
    {id: 4, nombre: 'Quirófano dental', descripcion:'Dotado de aparatos e insumos para la realización de cirugías, implantes, extracciones.'},
  ]

  //listFields: string [] = ['id', 'nombre','descripcion']
  metaDataColumns : MetaDataColumn[] = [
    {field: 'id', title: 'Id'},
    {field: 'nombre', title: 'Nombre'},
    {field: 'descripcion', title: 'Descripción'},
  ]
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
