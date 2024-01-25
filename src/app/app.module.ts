import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateJobApplicationComponent } from './update-job-application/update-job-application.component';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { JobApplicationDetailsComponent } from './job-application-details/job-application-details.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailComponent,
    UserListComponent,
    UpdateUserComponent,
    CreateJobComponent,
    JobListComponent,
    JobDetailsComponent,
    UpdateJobComponent,
    UpdateJobApplicationComponent,
    CreateJobApplicationComponent,
    JobApplicationDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
