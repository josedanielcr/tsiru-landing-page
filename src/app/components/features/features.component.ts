import { AfterContentChecked, Component, OnChanges, SimpleChanges } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  activeFeatTab : number = 0;

  setActiveTab(index: number){
    this.activeFeatTab = index;
  }
}
