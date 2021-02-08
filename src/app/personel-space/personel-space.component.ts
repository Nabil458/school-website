import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-personel-space',
  templateUrl: './personel-space.component.html',
  styleUrls: ['./personel-space.component.css']
})
export class PersonelSpaceComponent implements OnInit {

  constructor(private rout:Router) { }
  ngOnInit(): void {
  }

}
