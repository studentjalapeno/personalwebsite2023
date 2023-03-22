import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { Location } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { TipComponent } from './tip/tip.component';
import { ContactComponent } from './contact/contact.component';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        AboutComponent,
        GithubComponent,
        LinkedinComponent,
        ProjectsComponent,
        ResumeComponent,
        BlogComponent,
        TipComponent,
        ContactComponent,
      ],
    });

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
  });

  it('should navigate to AboutComponent', async () => {
    const fixture = TestBed.createComponent(AppComponent);

    if (fixture.ngZone) {
      fixture.ngZone.run(() => {
        router.navigate(['about']);
      });
      await fixture.whenStable();
      expect(location.path()).toBe('/about');
    } else {
      fail('ngZone is null');
    }
    });
  // Add more test cases for other routes as needed
});
