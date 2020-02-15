import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class EstimateComponent implements OnInit {

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }



  goDetail(){
    this.location.back();
  }

  selectForm: FormGroup;
  selectData: any = [];

  projecttypes: string[] = ['โครงการใหม่', 'โครงการเดิม'];
  
  
  ngOnInit() {

    this.selectData = {
      department: "",
      group: "",
      plan: "",
      product: "",
      activities: "",
      expense: "",
      list: "",
      projecttypes: "",
      totalbudget:""
    }
    this.selectForm = this.createSelectForm();
  }

  createSelectForm(): FormGroup {
    return this.formBuilder.group({
      department: [this.selectData.department, Validators.required],
      group: [this.selectData.group, Validators.required],
      plan: [this.selectData.plan, Validators.required],
      product: [this.selectData.product, Validators.required],
      activities: [this.selectData.activities, Validators.required],
      expense: [this.selectData.expense, Validators.required],
      list: [this.selectData.list, Validators.required],
      projecttypes: [this.selectData.projecttypes, Validators.required],
      totalbudget: [this.selectData.totalbudget, Validators.required]
    });
  }

  department: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานเอกชน', sound: 'หน่วยงาน!' },
  ];

  group: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  plan: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  product: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  activities: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  expense: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];


  onsubmit() {
    console.log(this.selectForm.value);
  }

}
