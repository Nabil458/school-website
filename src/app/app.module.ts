import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonelSpaceComponent } from './personel-space/personel-space.component';
import { TeacherComponent } from './personel-space/teacher/teacher/teacher.component';
import { HeaderComponent } from './header/header.component';
import { TimePlanningComponent } from './time-planning/time-planning.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { UploadFileComponent } from './personel-space/teacher/teacher/upload-file/upload-file.component';
import { DetailsUploadComponent } from './personel-space/teacher/teacher/upload-file/details-upload/details-upload.component';
import { FormUploadComponent } from './personel-space/teacher/teacher/upload-file/form-upload/form-upload.component';
import { ListUploadComponent } from './personel-space/teacher/teacher/upload-file/list-upload/list-upload.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatIconModule } from "@angular/material/icon";

import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LessonComponent } from './personel-space/lesson/lesson.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    PersonelSpaceComponent,
    TeacherComponent,
    HeaderComponent,
    TimePlanningComponent,
    UploadFileComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    TeacherListComponent,


    FilterPipe,
    SortPipe,
    LessonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FullCalendarModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
