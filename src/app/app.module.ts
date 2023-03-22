import { NgModule } from '@angular/core';
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
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
