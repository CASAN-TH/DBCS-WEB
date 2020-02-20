import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { Router, ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProposalService } from '../services/proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposalList.component.html',
  styleUrls: ['./proposalList.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProposalListComponent implements OnInit {

  rows: Array<any>;
  temp = [];
  ColumnMode = ColumnMode;

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private propService: ProposalService
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {
    this.rows = this.route.snapshot.data.items.data;
  }

  

  clickAdd() {
    this.router.navigateByUrl("/proposal/proposalForm/new");
  }

  editProposal(ev){
    switch (ev.type){
      case "edit":
        this.router.navigateByUrl("/proposal/proposalForm/" + ev.data._id);
        break;
      case "delete":
        this.propService.deleteProposalData(ev.data).then((res)=>{
          this.propService.getProposalDataList().subscribe((res:any)=>{
            this.rows = res.data;
          })
        })
        break;
    }
    
  }

  updateFilter(event) {
    //change search keyword to lower case
    // const val = event.target.value.toLowerCase();

    // filter our data
    
  }

}
