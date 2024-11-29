import { Injectable } from '@angular/core';
import {ToastComponent} from '../components/shared/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  toastComponent : ToastComponent | undefined;

  constructor() { }

  setToastComponent(toastComponent : ToastComponent) {
    this.toastComponent = toastComponent;
  }

  setMessage(message : string) {
    if(this.toastComponent) {
      this.toastComponent.setMessage(message);
    }
  }
}
