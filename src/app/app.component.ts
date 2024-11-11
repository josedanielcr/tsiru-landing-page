import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroComponent} from './components/hero/hero.component';
import {FeaturesComponent} from './components/features/features.component';
import {FaqComponent} from './components/faq/faq.component';
import {CompareComponent} from './components/compare/compare.component';
import {FooterComponent} from './components/footer/footer.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FeaturesComponent, FaqComponent, CompareComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {

  constructor(private router : Router) {
  }

  ngOnInit() {
    // @ts-ignore
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
