import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {SubscribeService} from '../../services/subscribe.service';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {Message} from 'postcss';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  activeTabIndex = 0;
  readonly email: FormControl<string | null> = new FormControl('', [Validators.required]);

  onTabChange(index : number) {
    this.activeTabIndex = index;
  }

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
