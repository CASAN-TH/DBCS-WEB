import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-proposal-form-approve',
  templateUrl: './proposal-form-approve.component.html',
  styleUrls: ['./proposal-form-approve.component.scss']
})
export class ProposalFormApproveComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.spinner.hide();
  }

  goBack() {
    this.spinner.show();
    this.location.back();
  }

}
