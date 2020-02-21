import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Step } from '../components/budget-plan/models/step';
import * as Moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EstimateComponent implements OnInit {

  proposalForm: FormGroup;
  proposalData: any = {};
  charts: Array<Step>;
  moment = Moment;

  plan: any[] = [
    { name: "แผนมาสาย" },
    { name: "แผนวางระเบิด" },
    { name: "แผนสุ้มยิง" },
    { name: "แผนว่ายน้ำ" }
  ]
  product: any[] = [
    { name: "ดีมาก" },
    { name: "ดี" },
    { name: "ปานกลาง" },
    { name: "น้อย" }
  ]
  activity: any[] = [
    { name: "สำรวจดูพื้นที่" },
    { name: "วางแผน" },
    { name: "ประชุมโครงการ" },
    { name: "ตรวจสอบโครงการ" }
  ]
  moneysource: any[] = [
    { name: "เงินบุคลากร" },
    { name: "เงินเบิกจ่าย" },
    { name: "เงินอื่น ๆ" }
  ]

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }



  goDetail() {
    this.location.back();
  }

  ngOnInit() {

    this.proposalData = {
      "description": "",
      "owner": "",
      "criteria": "",
      "objectives": "",
      "relatetostrategy1": "",
      "relatetostrategy2": "",
      "location": "",
      "targetgroup": "",
      "timeline": "",
      "process": "",
      "resulthistory": "",
      "budgetpaln": "",
      "output": "",
      "outcome": "",
      "benefit": "",
      "indicator": "",

      "plan": "",
      "product": "",
      "activity": "",
      "moneysource": ""
    }

    this.proposalForm = this.createForm();

    const store = localStorage.getItem('charts');
    if (store) {
      this.charts = JSON.parse(store);
    } else {
      this.charts = [];
      localStorage.setItem('charts', JSON.stringify([]));
    }
    // format dates
    this.charts.forEach((chart) => {
      chart.dates.start = this.moment(chart.dates.start).format('MM/DD');
      chart.dates.end = this.moment(chart.dates.end).format('MM/DD');
    });

  }

  createChart() {
    const start = this.moment().format('YYYY-MM-DD');
    const end = this.moment().add(7, 'days').format('YYYY-MM-DD');
    const chart = {
      'name': 'New Project',
      'progress': 0,
      'dates': {
        'start': start,
        'end': end,
      },
      'steps': []
    } as Step;
    this.charts.push(chart);
    this.router.navigate(['charts', this.charts.indexOf(chart)]); // navigate to new chart
  }


  createForm(): FormGroup {
    return this.formBuilder.group({
      description: [this.proposalData.description, Validators.required],
      owner: [this.proposalData.owner, Validators.required],
      criteria: [this.proposalData.criteria, Validators.required],
      objectives: [this.proposalData.objectives, Validators.required],
      relatetostrategy1: [this.proposalData.relatetostrategy1, Validators.required],
      relatetostrategy2: [this.proposalData.relatetostrategy2, Validators.required],
      location: [this.proposalData.location, Validators.required],
      targetgroup: [this.proposalData.targetgroup, Validators.required],
      timeline: [this.proposalData.timeline, Validators.required],
      process: [this.proposalData.process, Validators.required],
      resulthistory: [this.proposalData.resulthistory, Validators.required],
      budgetpaln: [this.proposalData.budgetpaln, Validators.required],
      output: [this.proposalData.output, Validators.required],
      outcome: [this.proposalData.outcome, Validators.required],
      benefit: [this.proposalData.benefit, Validators.required],
      indicator: [this.proposalData.indicator, Validators.required],

      plan: [this.proposalData.plan, Validators.required],
      product: [this.proposalData.product, Validators.required],
      activity: [this.proposalData.activity, Validators.required],
      moneysource: [this.proposalData.moneysource, Validators.required]
    });
  }

  onsubmit() {
    console.log(this.proposalForm.value);
  }

  onclose() {
    console.log("ยกเลิก");
  }

}
