import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  activeTabIndex = 0;

  onTabChange(index : number) {
    this.activeTabIndex = index;
  }
}
