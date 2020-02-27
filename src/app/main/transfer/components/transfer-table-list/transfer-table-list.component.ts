import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-table-list',
  templateUrl: './transfer-table-list.component.html',
  styleUrls: ['./transfer-table-list.component.scss']
})
export class TransferTableListComponent implements OnInit {
  rows: Array<any>
  constructor() { }

  ngOnInit() {
  }

}
