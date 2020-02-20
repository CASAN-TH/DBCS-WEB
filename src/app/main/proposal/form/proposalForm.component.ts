import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
import { fuseAnimations } from "@fuse/animations";

import { Location } from "@angular/common";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { locale as english } from "../i18n/en";
import { locale as thai } from "../i18n/th";
import { ProposalService } from "../services/proposal.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-proposal-form",
  templateUrl: "./proposalForm.component.html",
  styleUrls: ["./proposalForm.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProposalFormComponent implements OnInit {
  proposalForm: FormGroup;
  proposalData: any = {};
  lovData: any = [];
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private location: Location,
    private formBuilder: FormBuilder,
    private proposalService: ProposalService,
    private route: ActivatedRoute
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }

  ngOnInit(): void {
    this.lovData = [
      {
        code: "49",
        msttype: "plan",
        name: " แผนงานบูรณาการบริหารจัดการทรัพยากรน้ำ",
        parentcode: "0"
      },
      {
        code: "55",
        msttype: "plan",
        name:
          "แผนงานบุคลากรภาครัฐ (ด้านการจัดการน้ำและสร้างการเติบโตบนคุณภาพชีวิตที่เป็นมิตรกับสิ่งแวดล้อมอย่างยั่งยืน)",
        parentcode: "0"
      },
      {
        code: "56",
        msttype: "plan",
        name:
          "แผนงานพื้นฐานด้านการจัดการน้ำและสร้างการเติบโตบนคุณภาพชีวิตที่เป็นมิตรกับสิ่งแวดล้อมอย่างยั่งยืน",
        parentcode: "0"
      },
      {
        code: "49003",
        msttype: "plan",
        name:
          " พัฒนาองค์กร ระบบ กลไก และมาตรฐานการบริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "49"
      },
      {
        code: "55001",
        msttype: "plan",
        name: "รายการค่าใช้จ่ายบุคลากรภาครัฐ บริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "55"
      },
      {
        code: "56002",
        msttype: "plan",
        name: "การบริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "56"
      },
      {
        code: "49003001",
        msttype: "plan",
        name:
          " พัฒนาองค์กร ระบบ กลไก และมาตรฐานการบริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "49003"
      },
      {
        code: "55001001",
        msttype: "plan",
        name: "รายการค่าใช้จ่ายบุคลากรภาครัฐ บริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "55001"
      },
      {
        code: "56002001",
        msttype: "plan",
        name: "การบริหารจัดการทรัพยากรน้ำทั้งระบบ",
        parentcode: "56002"
      },
      {
        code: "0000001",
        msttype: "expense",
        name: "งบบุคคลากร",
        parentcode: "000000"
      },
      {
        code: "0000002",
        msttype: "expense",
        name: "งบดำเนินการ",
        parentcode: "0"
      },
      {
        code: "0000003",
        msttype: "expense",
        name: "งบลงทุน",
        parentcode: "0"
      },
      {
        code: "0000004",
        msttype: "expense",
        name: "งบรายจ่ายอื่นๆ",
        parentcode: "0"
      }
    ];

    this.proposalData = this.route.snapshot.data.item ? this.route.snapshot.data.item.data : {};
    this.proposalForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      compcode: [this.proposalData.compcode, Validators.required],
      deptcode: [this.proposalData.deptcode, Validators.required],
      plancode: [this.proposalData.plancode, Validators.required],
      projectcode: [this.proposalData.projectcode, Validators.required],
      activitycode: [this.proposalData.activitycode, Validators.required],
      sourcecode: [this.proposalData.sourcecode, Validators.required],
      name: [this.proposalData.name, Validators.required],
      owner: [this.proposalData.owner, Validators.required],
      criteria: [this.proposalData.criteria, Validators.required],
      objectives: [this.proposalData.objectives, Validators.required],
      relatetostrategy1: [
        this.proposalData.relatetostrategy1,
        Validators.required
      ],
      relatetostrategy2: [
        this.proposalData.relatetostrategy2,
        Validators.required
      ],
      location: [this.proposalData.location, Validators.required],
      targetgroup: [this.proposalData.targetgroup, Validators.required],
      timeline: [this.proposalData.timeline, Validators.required],
      process: [this.proposalData.process, Validators.required],
      resulthistory: [this.proposalData.resulthistory, Validators.required],
      budgetpaln: [this.proposalData.budgetpaln, Validators.required],
      output: [this.proposalData.output, Validators.required],
      outcome: [this.proposalData.outcome, Validators.required],
      benefit: [this.proposalData.benefit, Validators.required],
      indicator: [this.proposalData.indicator, Validators.required]
    });
  }

  goBack() {
    this.location.back();
  }

  async onSave() {
    console.log(this.proposalForm.value);
    let res = await this.proposalService.createProposalData(
      this.proposalForm.value
    );
    console.log(res);
  }
}
