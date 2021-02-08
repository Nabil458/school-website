import { Component, OnInit } from '@angular/core';
import { FileUpload } from './fileupload';
import { UploadFileService } from './upload-file.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
 
 
 
  constructor(){}
 ngOnInit(){}

}
