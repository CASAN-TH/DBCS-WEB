import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
import { locale as english } from "../i18n/en";
import { locale as thai } from "../i18n/th";
import { Router } from "@angular/router";
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: "app-estimates",
  templateUrl: "./estimates.component.html",
  styleUrls: ["./estimates.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EstimatesComponent implements OnInit {
  rows = [];

  temp = [];

  columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
  // @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

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
    });
  }

  ngOnInit() {}

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `../../../../assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  clickAdd() {
    this.router.navigateByUrl("/estimate/detail");
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || d.company.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }
}
