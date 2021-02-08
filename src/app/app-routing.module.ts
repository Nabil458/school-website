import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PersonelSpaceComponent} from './personel-space/personel-space.component';
import {TimePlanningComponent} from './time-planning/time-planning.component';
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {TeacherComponent} from './personel-space/teacher/teacher/teacher.component';
import {LessonComponent} from './personel-space/lesson/lesson.component';
import { LoginRouter } from './login/login.router';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path:'', component:HomePageComponent },
  { path:'personel-space', component:PersonelSpaceComponent,canActivate: [LoginRouter], children:[
    { path:'teacher', component:TeacherComponent,canActivate: [LoginRouter]},
    { path:'lesson', component:LessonComponent,canActivate: [LoginRouter]}
  ]},




  { path:'teacher-list', component:TeacherListComponent,canActivate: [LoginRouter] },
  { path:'time-planning', component:TimePlanningComponent,canActivate: [LoginRouter] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
