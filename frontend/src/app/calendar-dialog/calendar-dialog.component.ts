import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepicker, MatFormField, MatButton} from '@angular/material';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.css']
})


export class CalendarDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
