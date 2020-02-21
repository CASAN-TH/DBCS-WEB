import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-comfirm',
  templateUrl: './modal-comfirm.component.html',
  styleUrls: ['./modal-comfirm.component.scss']
})
export class ModalComfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

  }

  onConfirm() {
    this.dialogRef.close('confirm')
  }

  onCancel() {
    this.dialogRef.close()
  }

}
