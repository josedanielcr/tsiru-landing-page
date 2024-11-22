import { Component } from '@angular/core';
import {SubscribeCountComponent} from '../subscribe-count/subscribe-count.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [
    SubscribeCountComponent
  ],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {

}
