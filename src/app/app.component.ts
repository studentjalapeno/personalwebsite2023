import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HomeView} from "./shared/home-view.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'personalwebsite2023';
  HomeView = HomeView;
  currentView: HomeView = HomeView.OPTIONS;
  animationFinished = false;
  isAboutRoute = false;

  @ViewChild('lottieContainer') lottieContainer!: ElementRef;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let route = this.router.config.find(r => r.path === event.urlAfterRedirects.split('/')[1]);
      if (route && route.data && route.data['view']) {  // Here, use index signature to access 'view'
        this.currentView = HomeView[route.data['view'].toUpperCase() as keyof typeof HomeView];
      } else if (event.url === '' || event.url === '/') {
        this.currentView = HomeView.OPTIONS;
        this.animationFinished = false;
        this.ngAfterViewInit(); // Re-attach the complete event
      }
      this.isAboutRoute = event.url === '/about';
    });

    this.animationFinished = localStorage.getItem('animationFinished') === 'true';
  }

  navigateHome() {
    this.router.navigate(['/']); // navigate to root
  }

  ngAfterViewInit(): void {
    if (this.currentView === HomeView.OPTIONS) {
      const lottiePlayer = this.lottieContainer.nativeElement.querySelector('dotlottie-player');
      lottiePlayer.addEventListener('complete', () => {
        setTimeout(() => {
          this.onAnimationComplete();
          this.fadeOutLottie();
        }, 1000);  // Wait for 1 second after the animation completes
      });
    }
  }

  onAnimationComplete(): void {
    this.animationFinished = true;
    localStorage.setItem('animationFinished', 'true');
  }

  fadeOutLottie(): void {
    this.lottieContainer.nativeElement.style.opacity = '0';
    setTimeout(() => {
      this.lottieContainer.nativeElement.style.display = 'none';
    }, 1000);  // matches the CSS transition duration
  }
}
