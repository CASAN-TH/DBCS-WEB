import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';

@Component({
  selector: 'app-report-form',
  templateUrl: './reportForm.component.html',
  styleUrls: ['./reportForm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ReportFormComponent implements OnInit {

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {

  }

  goBack(){
    this.location.back();
  }


}
