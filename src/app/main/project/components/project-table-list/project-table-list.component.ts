import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-table-list',
  templateUrl: './project-table-list.component.html',
  styleUrls: ['./project-table-list.component.scss']
})
export class ProjectTableListComponent implements OnInit {
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
