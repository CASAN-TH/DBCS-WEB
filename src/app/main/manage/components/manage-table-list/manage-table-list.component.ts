import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-table-list',
  templateUrl: './manage-table-list.component.html',
  styleUrls: ['./manage-table-list.component.scss']
})
export class ManageTableListComponent implements OnInit {
  rows: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
