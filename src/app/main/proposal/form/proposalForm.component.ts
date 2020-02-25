import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
import { fuseAnimations } from "@fuse/animations";

import { Location } from "@angular/common";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { locale as english } from "../i18n/en";
import { locale as thai } from "../i18n/th";
import { ProposalService } from "../services/proposal.service";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { FuseSplashScreenService } from "@fuse/services/splash-screen.service";
import { DialogConfirmService } from "app/dialog-confirm/service/dialog-confirm.service";

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
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private splash: FuseSplashScreenService,
    private dialogConfirmService: DialogConfirmService
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

    this.proposalData = this.route.snapshot.data.item
      ? this.route.snapshot.data.item.data
      : {
          // owner:
          //   "<p>ชื่อ-นามสกุล&nbsp;&nbsp;&nbsp;&nbsp;นายอุทัย เตียนพลกรัง</p><p>ตำแหน่ง&nbsp;&nbsp;&nbsp;&nbsp;       ผู้อำนวยการศูนย์อำนวยการน้ำแห่งชาติ</p><p>สังกัด&nbsp;&nbsp;&nbsp;&nbsp;สำนักงานทรัพยากรน้ำแห่งชาติ</p><p>โทรศัพท์เคลื่อนที่&nbsp;&nbsp;&nbsp;&nbsp;0-2521-9141</p><p>E-mail address&nbsp;&nbsp;&nbsp;&nbsp;nwcc.onwr@gmail.com</p><p></p><p></p>"
        };
    this.proposalForm = this.createForm();
    this.spinner.hide();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      startdate: [this.proposalData.startdate, Validators.required],
      enddate: [this.proposalData.enddate, Validators.required],
      budgetyear: [this.proposalData.budgetyear],
      budgetsummary: [this.proposalData.budgetsummary, Validators.required],
      budgetinyear: [this.proposalData.budgetinyear, Validators.required],
      compcode: [this.proposalData.compcode],
      deptcode: [this.proposalData.deptcode],
      plancode: [this.proposalData.plancode, Validators.required],
      projectcode: [this.proposalData.projectcode, Validators.required],
      activitycode: [this.proposalData.activitycode, Validators.required],
      sourcecode: [this.proposalData.sourcecode, Validators.required],
      name: [this.proposalData.name, Validators.required],
      owner: [this.proposalData.owner, Validators.required],
      criteria: [this.proposalData.criteria],
      objectives: [this.proposalData.objectives],
      relatetostrategy1: [this.proposalData.relatetostrategyoutside],
      relatetostrategy2: [this.proposalData.relatetostrategyinside],
      location: [this.proposalData.location],
      targetgroup: [this.proposalData.targetgroup],
      timeline: [this.proposalData.timeline],
      process: [this.proposalData.process],
      resulthistory: [this.proposalData.resulthistory],
      budgetpaln: [this.proposalData.budgetpaln],
      output: [this.proposalData.output],
      outcome: [this.proposalData.outcome],
      benefit: [this.proposalData.benefit],
      indicator: [this.proposalData.indicator],
      file001Url: [this.proposalData.file001Url],
      file002Url: [this.proposalData.file002Url],
      file003Url: [this.proposalData.file003Url]
    });
  }

  goBack() {
    this.spinner.show();
    this.location.back();
  }

  async onSave() {
    // console.log(this.proposalForm.value);
    this.spinner.show();
    if (this.proposalData._id) {
      this.proposalForm.value._id = this.proposalData._id;

      this.proposalService
        .updateProposalData(this.proposalForm.value)
        .then(res => {
          // console.log(res);
          this.location.back();
        })
        .catch(err => {
          this.spinner.hide();
        });
    } else {
      this.proposalService
        .createProposalData(this.proposalForm.value)
        .then(() => {
          this.location.back();
        })
        .catch(err => {
          this.spinner.hide();
        });
    }
  }

  drop(ev) {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    console.log(files);
    if (files[0].type === "application/msword") {
      // alert(files[0].name);
      this.dialogConfirmService
        .show({ title: "นำเข้าข้อมูลจากเอกสาร", message: `ท่านต้องการนำเข้าข้อมูลจากเอกสาร ${files[0].name} ใช่ หรือ ไม่ ?` })
        .then(result => {
          if (result) {
            this.spinner.show();
            this.proposalService.uploadProposalData(files[0]).subscribe(
              (res: any) => {
                console.log(res);
                this.proposalData = res.data;
                this.proposalForm = this.createForm();
                this.spinner.hide();
              },
              err => {
                console.log(err);
                this.spinner.hide();
                throw new Error(
                  "รูปแบบเอกสารที่ท่านอัพโหลดไม่ถูกต้อง !<br>ระบบรองรับเฉพาะเอกสารตามรูปแบบที่กองแผนงานกำหนดเท่านั้น..."
                );
              }
            );
          }
        });
    } else {
      //format is wrong,
      throw new Error(
        "รูปแบบเอกสารที่ท่านอัพโหลดไม่ถูกต้อง ! \n ระบบรองรับเฉพาะเอกสารตามรูปแบบที่กองแผนงานกำหนดเท่านั้น..."
      );
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
}
