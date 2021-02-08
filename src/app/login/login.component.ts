import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string= '';

  constructor(private ling:LoginService, private rout:Router){}
  ngOnInit(): void {
  }
  onSubmit(ide:NgForm){
    console.log(ide.value);
    if(!ide.valid){
      return;
    }
    const email=ide.value.email;
    const password=ide.value.password;
    this.ling.login(email,password).subscribe(
      resData => {
        console.log(resData);
        this.rout.navigate(['/personel-space/lesson']);

      },
      errorUpdate => {
        console.log(errorUpdate);
        this.error = errorUpdate;

      }

    );
    ide.reset();
   }
}
