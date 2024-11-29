import { Component } from '@angular/core';
import {SubscribeCountComponent} from '../subscribe-count/subscribe-count.component';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {SubscribeService} from '../../services/subscribe.service';
import {MessageService} from '../../services/message.service';
import {EmailValidationService} from '../../services/email-validation.service';

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
              private messageService : MessageService,
              private emailValidationService : EmailValidationService) {}

  subscribe() {
    if (this.email.invalid) {
      return;
    }
    this.subscribeService.handleSubscription(
      this.email.value as string,
      this.emailValidationService,
      (email: string) => this.subscribeService.subscribe(email)
    );
    this.email.reset();
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
  }
}
