import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-prop-list',
  templateUrl: './prop-list.component.html',
  styleUrls: ['./prop-list.component.scss']
})
export class PropListComponent implements OnInit {

  @Input() rows: Array<any> = [];
  @Output() editProposal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editProposalData(type, index) {
    this.editProposal.emit({
      "type": type,
      "data": this.rows[index]
    });
  }

}
