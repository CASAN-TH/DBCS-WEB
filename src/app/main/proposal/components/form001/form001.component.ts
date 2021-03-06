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
  constructor(private formBuilder: FormBuilder) {

  }

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
    // console.log(e.source.selected.viewValue);
    this.proposalForm.value.planname = e.source.selected.viewValue;
    this.projectDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }

  onProjectChange(e){
    
    this.proposalForm.value.projectname = e.source.selected.viewValue;
    console.log(this.proposalForm.value.projectname);
    this.activityDataList = this.lovData.filter((item: any) => {
      return item.msttype === "plan" && item.parentcode === e.value;
    });
  }

  onActivityChange(e){
    console.log(e.source.selected.viewValue);
    this.proposalForm.value.activityname = e.source.selected.viewValue;
  }

  onSourceChange(e){
    console.log(e.source.selected.viewValue);
    this.proposalForm.value.sourcename = e.source.selected.viewValue;
  }
}
