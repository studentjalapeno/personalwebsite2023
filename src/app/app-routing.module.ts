import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { TipComponent } from './tip/tip.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: GithubComponent,  data: {view: 'services'}  },
  { path: 'linkedin', component: LinkedinComponent },
  { path: 'projects', component: ProjectsComponent , data: {view: 'projects'}  },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent,  data: {view: 'blog'}  },
  { path: 'tip', component: TipComponent },
  { path: 'contact', component: ContactComponent, data: {view: 'contact'} },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
