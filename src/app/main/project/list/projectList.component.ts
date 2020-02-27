import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './projectList.component.html',
  styleUrls: ['./projectList.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProjectListComponent implements OnInit {
  rows: Array<any>;
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private router: Router
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {
    this.rows = [
      {
        budgetyear : 2562,
        projects: 28,
        pb:150000000,
        ab:150000000,
        ib:100000000,
        ob:100000000,
        budgetinyear:350000000,
        budgetotheryear:50000000,
        budgetsummary:400000000,
        status: "ปิดปีงบประมาณ"
      },
      {
        budgetyear : 2563,
        projects: 32,
        pb:100000000,
        ab:100000000,
        ib:100000000,
        ob:100000000,
        budgetinyear:250000000,
        budgetotheryear:50000000,
        budgetsummary:300000000,
        status: "จัดเตรียมเอกสาร"
      }
    ]
  }

  clickAdd() {
    this.router.navigateByUrl("/project/ProjectForm/new");
  }

  updateFilter(event) {
    //change search keyword to lower case
    // const val = event.target.value.toLowerCase();

    // filter our data
    
  }

}
