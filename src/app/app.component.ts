import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroComponent} from './components/hero/hero.component';
import {FeaturesComponent} from './components/features/features.component';
import {FaqComponent} from './components/faq/faq.component';
import {CompareComponent} from './components/compare/compare.component';
import {FooterComponent} from './components/footer/footer.component';
import {SubscribeComponent} from './components/subscribe/subscribe.component';
import {ToastComponent} from './components/shared/toast/toast.component';
import {MessageService} from './services/message.service';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FeaturesComponent, FaqComponent, CompareComponent, FooterComponent, SubscribeComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit, AfterViewInit {

  @ViewChild(ToastComponent) toastComponent: ToastComponent | undefined;

  constructor(private router : Router,
              private messageService : MessageService) {
  }

  ngAfterViewInit(): void {
    this.messageService.setToastComponent(this.toastComponent as ToastComponent);
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
