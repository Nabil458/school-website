import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { FileUpload } from '../fileupload';


@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles!: any;
  currentFileUpload!: FileUpload;
  percentage!: number;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }


  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
