import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

interface IData{
  id: number
  name: string
}

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    //Arreglo nunca va a ser nulo
  //@Input() listFields!: string[]

  @Input() data: any
  @Input() metaDataColumns!: MetaDataColumn[] 
  //Agrega nuevas definiciones de columna
  @ContentChildren(MatColumnDef, {descendants: true})
  //Agregar elementos desde un compoenente externo
  ColumnsDef !: QueryList<MatColumnDef>
  //Obtengo la referencia del MatTable al cual se puede agregar las columnas
  @ViewChild(MatTable, {static:true}) table !: MatTable<any>
  listFields : string[] = []

  /*
  data: IData[] = [
    {id: 1, name: 'Luis'},
    {id: 2, name: 'Angela'},
    {id: 3, name: 'Maris'},
    {id: 4, name: 'Joao'},
    {id: 5, name: 'Alan'},
  ]

  listFields: string [] = ['id', 'name']
*/
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['metaDataColumns']){
      this.listFields = this.metaDataColumns.map( (x) => x.field)
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    if(!this.ColumnsDef){
      return
    }
      this.ColumnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name)
      this.table?.addColumnDef(columnDef)
    })
  }
}
