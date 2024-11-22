import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeCountComponent } from './subscribe-count.component';

describe('SubscribeCountComponent', () => {
  let component: SubscribeCountComponent;
  let fixture: ComponentFixture<SubscribeCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
