import { Component } from '@angular/core';
import {SubscribeCountComponent} from '../subscribe-count/subscribe-count.component';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {SubscribeService} from '../../services/subscribe.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [
    SubscribeCountComponent,
    ReactiveFormsModule
  ],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {

  readonly email: FormControl<string | null> = new FormControl('', [Validators.required]);

  constructor(private subscribeService : SubscribeService,
              private messageService : MessageService) {}

  subscribe() {
    if(this.email.invalid){
      return;
    }
    this.subscribeService.subscribe(this.email.value as string).subscribe({
      next : (res : any) => {
        this.messageService.setMessage(res.message);
      }
    });
  }
}
