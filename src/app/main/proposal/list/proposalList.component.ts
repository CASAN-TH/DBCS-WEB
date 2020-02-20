import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposalList.component.html',
  styleUrls: ['./proposalList.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProposalListComponent implements OnInit {

  rows = [];
  temp = [];
  ColumnMode = ColumnMode;

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private router: Router
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);

    this.fetch(data => {
      // cache our list
      this.temp = data;

      // push our inital complete list
      this.rows = data;
      console.log(this.rows)
    });
  }


  ngOnInit(): void {

  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `../../../../assets/data/proposal-list.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  clickAdd() {
    this.router.navigateByUrl("/proposal/proposalForm/new");
  }

  updateFilter(event) {
    //change search keyword to lower case
    // const val = event.target.value.toLowerCase();

    // filter our data
    
  }

}
