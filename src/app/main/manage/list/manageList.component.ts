import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manageList.component.html',
  styleUrls: ['./manageList.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ManageListComponent implements OnInit {

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private router: Router
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {

  }

  clickAdd() {
    this.router.navigateByUrl("/manage/ManageForm/new");
  }

  updateFilter(event) {
    //change search keyword to lower case
    // const val = event.target.value.toLowerCase();

    // filter our data
    
  }

}
