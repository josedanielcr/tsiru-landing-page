import { Component } from '@angular/core';

class ToastMessage {
  message: string | undefined;
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  messagesQueue : ToastMessage[] = [];
  private readonly TIMER = 5000;

  constructor() {
  }

  setMessage(message : string) {
    this.messagesQueue.push({message});
    setTimeout(() => {
      this.messagesQueue.shift();
    }, this.TIMER);
  }

}
