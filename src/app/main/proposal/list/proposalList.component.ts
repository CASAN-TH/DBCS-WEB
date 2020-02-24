import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { fuseAnimations } from '@fuse/animations';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';
import { Router, ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProposalService } from '../services/proposal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogConfirmService } from 'app/dialog-confirm/service/dialog-confirm.service';

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
    private propService: ProposalService,
    private spinner: NgxSpinnerService,
    public dialogConfirmService: DialogConfirmService
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }


  ngOnInit(): void {
    this.spinner.hide();
    this.rows = this.route.snapshot.data.items.data;
  }



  clickAdd() {
    this.router.navigateByUrl("/proposal/proposalForm/new");
  }

  // editProposal(ev) {
  //   switch (ev.type) {
  //     case "edit":
  //       this.spinner.show();
  //       this.router.navigateByUrl("/proposal/proposalForm/" + ev.data._id);
  //       break;
  //     case "delete":
  //       const dialogRef = this.dialog.open(ModalComfirmComponent, {
  //         width: '400px',
  //         data: { title: "ยืนยันการลบ", message: "กรุณาตรวจสอบอีกรอบ" },
  //         disableClose: true
  //       });

  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //           this.propService.deleteProposalData(ev.data).then((res) => {
  //             this.propService.getProposalDataList().subscribe((res: any) => {
  //               this.rows = res.data;
  //             })
  //           })
  //         }
  //       });
  //       break;
  //   }

  // }

  editProposal(ev) {
    this.dialogConfirmService.show();
  }

  updateFilter(event) {
    //change search keyword to lower case
    // const val = event.target.value.toLowerCase();

    // filter our data

  }

}
