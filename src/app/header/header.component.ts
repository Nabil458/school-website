import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable({ providedIn: 'root' })
export class HeaderComponent implements OnInit, OnDestroy {
  log:string='Log in';
  isAuthenticated = false;
  private userSub!: Subscription;
  constructor(private rout:Router, private loginServ:LoginService ) { }
  onLogout(){

    if(this.log==='log in')
    this.log='log out'
    else
    this.log='Log in';
    this.loginServ.logout();
  }
  ngOnInit(): void {
    this.userSub = this.loginServ.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
