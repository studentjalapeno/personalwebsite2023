import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeOptionsComponent } from './home-options/home-options.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { TipComponent } from './tip/tip.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeOptionsComponent,
    AboutComponent,
    GithubComponent,
    LinkedinComponent,
    ProjectsComponent,
    ResumeComponent,
    BlogComponent,
    TipComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        RouterLink,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
