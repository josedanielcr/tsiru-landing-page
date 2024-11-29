import {Component, effect, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-subscribe-count',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './subscribe-count.component.html',
  styleUrl: './subscribe-count.component.css',
  animations: []
})
export class SubscribeCountComponent implements OnInit {
  count: number = 0;
  digits: string[] = [];
  nextDigits: (string | null)[] = [];
  minDigits = 4;

  constructor(public subscribeService: SubscribeService) {
    effect(() => {
      this.count = this.subscribeService.counter();
      this.incrementCount();
    });
  }

  ngOnInit(): void {
    this.incrementCount();
  }

  incrementCount(): void {
    const paddedCount = this.count.toString().padStart(this.minDigits, '0');
    const oldDigits = [...this.digits];
    this.digits = paddedCount.split('');
    this.nextDigits = this.digits.map((digit, i) => {
      if (oldDigits[i] === undefined || digit !== oldDigits[i]) {
        return digit;
      }
      return null;
    });
    setTimeout(() => (this.nextDigits = []), 400);
  }
}
