import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form001",
  templateUrl: "./form001.component.html",
  styleUrls: ["./form001.component.scss"]
})
export class Form001Component implements OnInit {
  @Input() proposalForm: FormGroup;
  @Input() lovData: any = [];
  planDataList: any[];
  projectDataList: any[];
  activityDataList: any[];
  sourceDataList: any[];

  // plancode: [this.proposalData.plancode, Validators.required],
  //     projectcode: [this.proposalData.projectcode, Validators.required],
  //     activitycode: [this.proposalData.activitycode, Validators.required],
  //     sourcecode: [this.proposalData.sourcecode, Validators.required],
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.planDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === "0";
    });

    this.sourceDataList = this.lovData.filter((item: any) => {
      return item.msttype === "expense" && item.parentcode === "0";
    });
  }

  onPlanChange(e) {
    this.projectDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }

  onProjectChange(e){
    this.activityDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }
}
