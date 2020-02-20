import { Component, OnInit, Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-prop-list',
  templateUrl: './prop-list.component.html',
  styleUrls: ['./prop-list.component.scss']
})
export class PropListComponent implements OnInit {

  @Input() rows: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
