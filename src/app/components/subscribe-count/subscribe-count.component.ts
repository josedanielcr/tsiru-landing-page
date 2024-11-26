import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

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
  count: number = 1500;
  digits: string[] = [];
  nextDigits: (string | null)[] = [];

  ngOnInit(): void {
    this.updateDigits();
    //increment count every 1 second
    setInterval(() => this.incrementCount(), 1000);
  }

  incrementCount(): void {
    const oldDigits = [...this.digits];
    this.count++;
    this.updateDigits();

    // Prepare nextDigits array for animation
    this.nextDigits = this.count.toString().split('').map((digit, i) => {
      return digit !== oldDigits[i] ? digit : null;
    });

    setTimeout(() => (this.nextDigits = []), 400);
  }

  private updateDigits(): void {
    this.digits = this.count.toString().split('');
  }
}
