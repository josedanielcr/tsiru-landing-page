import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopComponentComponent } from './scroll-to-top-component.component';

describe('ScrollToTopComponentComponent', () => {
  let component: ScrollToTopComponentComponent;
  let fixture: ComponentFixture<ScrollToTopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToTopComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
