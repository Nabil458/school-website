import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  @ViewChild('dataOne', { static: false }) formu!: NgForm;

  ngOnInit(): void {
  }


  sender = {
    name:'',
    phone:'',
    email:'',
    question:''
  };
  submitted = false;
  onSubmit() {

    this.submitted = true;
    this.sender.name = this.formu.value.name;
    this.sender.phone=this.formu.value.Phone;
    this.sender.email = this.formu.value.email;
    this.sender.question= this.formu.value.question;
    console.log(this.sender);



    this.formu.reset();
  }
}
