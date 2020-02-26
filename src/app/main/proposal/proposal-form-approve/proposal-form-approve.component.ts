import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { DomSanitizer } from "@angular/platform-browser";
import { ProposalService } from '../services/proposal.service';

@Component({
  selector: "app-proposal-form-approve",
  templateUrl: "./proposal-form-approve.component.html",
  styleUrls: ["./proposal-form-approve.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProposalFormApproveComponent implements OnInit {
  proposalData: any = {};
  file001Url: any = "";
  file003Url: any = "";

  constructor(
    private spinner: NgxSpinnerService,
    private location: Location,
    private route: ActivatedRoute,
    private proposalService: ProposalService
  ) {
    this.proposalData = this.route.snapshot.data.item
      ? this.route.snapshot.data.item.data
      : {};

    console.log(this.proposalData);

    this.file001Url = `https://view.officeapps.live.com/op/embed.aspx?src=${this.proposalData.file001Url}`;
    this.file003Url = `https://view.officeapps.live.com/op/embed.aspx?src=${this.proposalData.file003Url}`;
    // this.frm001 = "https://www.google.com/";
  }

  ngOnInit() {
    this.spinner.hide();
  }

  goBack() {
    this.spinner.show();
    this.location.back();
  }

  async onSave() {
    // console.log(this.proposalForm.value);
    this.spinner.show();
    this.proposalData.status = "wait for approve";
    this.proposalService
      .updateProposalData(this.proposalData)
      .then(res => {
        // console.log(res);
        this.location.back();
      })
      .catch(err => {
        this.spinner.hide();
      });
  }

  async approve() {
    // console.log(this.proposalForm.value);
    this.spinner.show();
    this.proposalData.status = "approved";
    this.proposalService
      .updateProposalData(this.proposalData)
      .then(res => {
        // console.log(res);
        this.location.back();
      })
      .catch(err => {
        this.spinner.hide();
      });
  }

  async reject() {
    // console.log(this.proposalForm.value);
    this.spinner.show();
    this.proposalData.status = "rejected";
    this.proposalService
      .updateProposalData(this.proposalData)
      .then(res => {
        // console.log(res);
        this.location.back();
      })
      .catch(err => {
        this.spinner.hide();
      });
  }
}
