import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService} from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error:string= '';

  constructor(private ling:SignupService, private rout:Router){}
  ngOnInit(): void {
  }
  onSubmit(ide:NgForm){
    console.log(ide.value);
    if(!ide.valid){
      return;
    }
    const email=ide.value.email;
    const password=ide.value.password;
    this.ling.signup(email,password).subscribe(
      resData => {
        console.log(resData);
        this.rout.navigate(['/login']);

      },
      errorUpdate => {
        console.log(errorUpdate);
        this.error = errorUpdate;

      }

    );
    ide.reset();
   }
}
