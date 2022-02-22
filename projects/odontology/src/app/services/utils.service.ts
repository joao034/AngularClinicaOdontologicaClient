import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormComponent } from "../dentists/components/form/form.component";
import { DownloadComponent } from "../shared/components/download/download.component";
@Injectable({
    providedIn: 'root'
}) 

export class UtilsService{

    constructor(private bottomSheet: MatBottomSheet, private dialog: MatDialog){}

    showBottonSheet(){
        this.bottomSheet.open(DownloadComponent)
    }

    showFormModal(classComponent : any, options: { [s : string] : string|boolean|number|object}): MatDialogRef<any>{
        return this.dialog.open(classComponent, options)
    }

}
