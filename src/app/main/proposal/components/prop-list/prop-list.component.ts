import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-prop-list',
  templateUrl: './prop-list.component.html',
  styleUrls: ['./prop-list.component.scss']
})
export class PropListComponent implements OnInit {

  @Input() rows: Array<any> = [];
  @Output() editProposalBack: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editProposal(type, index) {
    this.editProposalBack.emit({
      "type": type,
      "data": this.rows[index]
    });
  }

}
