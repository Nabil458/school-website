import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
  @ViewChild('data', { static: false }) formulaire!: NgForm;
  //@ContentChild('file', {static: true}) File!: ElementRef;
  genders = ['M.', 'Mme.'];
  question='';

  user = {
    gender: '',
    name:'',
    phone:'',
    email:'',
    matiere:'',
    grade:'',
    question:''
  };
  submitted = false;
 /* ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.File.nativeElement.textContent);
  }*/
  onSubmit() {

    this.submitted = true;
    this.user.gender = this.formulaire.value.gender;
    this.user.name = this.formulaire.value.name;
    this.user.phone=this.formulaire.value.Phone;
    this.user.email = this.formulaire.value.email;
    this.user.matiere = this.formulaire.value.matiere;
    this.user.grade = this.formulaire.value.grade;
    this.user.question= this.formulaire.value.question;
   /* this.user.file=this.File.nativeElement.textContent;*/
    console.log(this.user);
    this.formulaire.reset();
  }
  ngOnInit(): void {
  }

}
