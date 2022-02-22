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

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  title = "Lista de Pacientes"

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
    {id: 1, cedula: '1851005361', nombre:'Juan', apellido:'Cáceres', genero: 'M', fec_nac:'03/04/2000', tipoSangre: 'B+', direccion: 'Pelileo', telefono : '0992580757'},
    {id: 2, cedula: '1851005123', nombre:'Lucía', apellido:'Jaitia', genero: 'F', fec_nac:'15/04/1998', tipoSangre: 'B-', direccion: 'Ambato', telefono : '0992580757'},
    {id: 3, cedula: '1851005888', nombre:'María', apellido:'López', genero: 'F', fec_nac:'05/10/1996', tipoSangre: 'A+', direccion: 'Ambato', telefono : '0992580757'},
    {id: 4, cedula: '1851005666', nombre:'Alison', apellido:'Medina', genero: 'F', fec_nac:'10/10/2000', tipoSangre: 'A-', direccion: 'Ambato', telefono : '0992580757'},
    {id: 5, cedula: '1851005032', nombre:'Sebastán', apellido:'Carrasco', genero: 'M', fec_nac:'13/12/2003', tipoSangre: 'B+', direccion: 'Pelileo', telefono : '0992580757'},
  ]

  //listFields: string [] = ['id', 'cedula', 'nombre', 'apellido', 'genero', 'fec_nac', 'tipoSangre', 'direccion', 'telefono']
  metaDataColumns : MetaDataColumn[] = [
    {field: 'id', title: "Id"},
    {field: 'cedula', title: "Cédula"},
    {field: 'nombre', title: "Nombre"},
    {field: 'apellido', title: "Apellido"},
    {field: 'genero', title: "Género"},
    {field: 'fec_nac', title: "Fecha Nacimiento"},
    {field: 'tipoSangre', title: "Tipo de Sangre"},
    {field: 'direccion', title: "Dirección"},
    {field: 'telefono', title: "Teléfono"},
  ]

  openForm(row: any){

  }

  delete( row: any ){
    
  }

  doAction( action: string){
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

