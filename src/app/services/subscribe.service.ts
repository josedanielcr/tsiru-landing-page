import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

class SubscribeReq {
  email: string | undefined;
}

class SubscribeRes {
  message: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private httpClient : HttpClient) { }

  subscribe(email: string) {
    const req = new SubscribeReq();
    req.email = email;
    return this.httpClient.post<SubscribeRes>(environment.subscribe, req);
  }
}
