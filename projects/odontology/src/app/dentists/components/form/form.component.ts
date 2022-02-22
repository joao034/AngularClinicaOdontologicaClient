import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'odonto-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  title : string 
  group !: FormGroup

  constructor(private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title = data ? 'EDICION' : 'NUEVO'
     }

  ngOnInit(): void {
    this.loadForm()
  }

  
  save(){
    const record = this.group.value
    this.reference.close(record)
  }


  loadForm(){
    this.group = new FormGroup({
      cedula : new FormControl(this.data ?. cedula, Validators.required),
      nombre : new FormControl(this.data ?. cedula, Validators.required),
      apellido : new FormControl(this.data ?. cedula, Validators.required),
      genero : new FormControl(this.data ?. genero, Validators.required),
      especialidad : new FormControl(this.data ?. especialidad, Validators.required),
    })
  }
}
