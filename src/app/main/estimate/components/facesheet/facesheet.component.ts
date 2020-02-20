import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facesheet',
  templateUrl: './facesheet.component.html',
  styleUrls: ['./facesheet.component.scss']
})
export class FacesheetComponent implements OnInit {
  files: any[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.files)
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
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }
}
