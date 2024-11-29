import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EmailValidationService} from './email-validation.service';
import {Observable} from 'rxjs';
import {MessageService} from './message.service';

class SubscribeReq {
  email: string | undefined;
}

class SubscribeRes {
  Message: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private httpClient : HttpClient,
              private messageService : MessageService) { }

  handleSubscription(
    email: string,
    emailValidationService: EmailValidationService,
    subscribeCallback: (email: string) => Observable<any>
  ): void {
    if (!emailValidationService.isValidEmail(email)) {
      this.messageService.setMessage('El correo electrónico no tiene un formato válido');
      return;
    }
    subscribeCallback(email).subscribe({
      next: (res: any) => {
        this.messageService.setMessage(res.Message);
      },
    });
  }

  subscribe(email: string) {
    const req = new SubscribeReq();
    req.email = email;
    return this.httpClient.post<SubscribeRes>(environment.subscribe, req);
  }
}
