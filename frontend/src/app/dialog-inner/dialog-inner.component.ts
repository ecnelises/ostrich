import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepicker, MatFormField, MatButton} from '@angular/material';

@Component({
  selector: 'app-dialog-inner',
  templateUrl: './dialog-inner.component.html',
  styleUrls: ['./dialog-inner.component.css']
})

export class DialogInnerComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogInnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
