import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent implements OnInit {

  @Input() proposalForm: FormGroup;
  @Input() lovData: any = [];
  planDataList: any[];
  projectDataList: any[];
  activityDataList: any[];
  sourceDataList: any[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.planDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === "0";
    });

    this.sourceDataList = this.lovData.filter((item: any) => {
      return item.msttype === "expense" && item.parentcode === "0";
    });

    this.projectDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === this.proposalForm.value.plancode;
    });
    this.activityDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === this.proposalForm.value.projectcode;
    });
  }

  onPlanChange(e) {
    console.log(e.value);
    this.projectDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }

  onProjectChange(e) {
    this.activityDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }

}
