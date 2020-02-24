import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'app/main/proposal/services/proposal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-facesheet',
  templateUrl: './facesheet.component.html',
  styleUrls: ['./facesheet.component.scss']
})
export class FacesheetComponent implements OnInit {
  files: any[] = [];
  proposalData: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.files)
    console.log(this.route.snapshot.data.item);
  }


  onFileDropped($event) {
    this.prepareFilesList($event);
  }
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }

  }

}
