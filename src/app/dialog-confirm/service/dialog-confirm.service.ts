import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  constructor(
    public dialog: MatDialog
  ) { }

  show() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: { title: "service", message: "service Detail" },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

}
