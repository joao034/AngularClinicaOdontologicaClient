import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from '../../../services/utils.service';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { DentistModel } from '../../models/dentist.model';
import { CrudDentistService } from '../../services/crud-dentist.service';

@Component({
  selector: 'odonto-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private utilsService: UtilsService, private crudDentist: CrudDentistService) { }

  ngOnInit(): void {
    this.changePage(0)

  }

  title = "Lista de Odontólogos"

  dataDentists : DentistModel[] = []

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

  /*data: any[] = [
    {id: 1, cedula: '1234567895', nombre:'Juan', apellido:'Sánchez', genero: 'M', especialidad:'Cirujano Maxilofacial'},
    {id: 2, cedula: '1851005361', nombre:'Carlos', apellido:'Sornoza', genero: 'M', especialidad:'Odontólogo General'},
    {id: 3, cedula: '1856932014', nombre:'Anita', apellido:'Aguilar', genero: 'F', especialidad:'Endodoncista'},
    {id: 4, cedula: '1235698014', nombre:'Samuel', apellido:'Jiménez', genero: 'M', especialidad:'Periodoncista'},
    {id: 5, cedula: '1230548905', nombre:'Estefanny', apellido:'Gómez', genero: 'F', especialidad:'Radiológo'},
  ]*/

  //listFields: string [] = ['id', 'cedula', 'nombre', 'apellido', 'genero', 'especialidad']
  metaDataColumns : MetaDataColumn[] = [
    {field: '_id', title: "Id"},
    {field: 'cedula', title: "Cédula"},
    {field: 'nombre', title: "Nombre"},
    {field: 'apellido', title: "Apellido"},
    {field: 'genero', title: "Género"},
    {field: 'especialidad', title: "Especialidad"}
  ]

  openForm(row: any = null){
    const options = {
      //CSS 
      panelClass : 'panel-container',
      //No se cierre el formulario cuando se clicke afuera
      disableClose : true.valueOf,
      //data
      data : row
    }

    const reference: MatDialogRef<FormComponent> = this.utilsService.showFormModal(FormComponent, options)

    reference.afterClosed().subscribe((response) => {
      if(!response){
        return
      }

      if(row && row._id){
        //api actualizar
        this.crudDentist.updateDentist(row._id, response).subscribe(() =>{
          this.changePage(0)
        })
        return
      }else{
        //api registrar
        this.crudDentist.addDentist(response).subscribe(() => {
          this.changePage(0)
        })
      }
    })
  }


  delete(row: any){
    this.crudDentist.deleteDentist(row._id).subscribe( data => {
      this.changePage(0)
    })
  }


  doAction(action : string){
    switch(action){
      case 'DOWNLOAD':
        this.utilsService.showBottonSheet()
        break

      case 'NEW' :
          this.openForm()
          break

    }
  }

  changePage( page: number ){
    //Para acceder a la data se debe suscribir
    this.crudDentist.getDentists().subscribe(response =>{
      this.dataDentists = response
    })
  }



}
