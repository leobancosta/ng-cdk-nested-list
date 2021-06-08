import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-data';

@Component({
    selector: 'app-dialog-form',
    templateUrl: './dialog-form.component.html',
    styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
