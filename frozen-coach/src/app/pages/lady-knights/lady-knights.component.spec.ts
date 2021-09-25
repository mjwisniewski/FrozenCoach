import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadyKnightsComponent } from './lady-knights.component';

describe('LadyKnightsComponent', () => {
  let component: LadyKnightsComponent;
  let fixture: ComponentFixture<LadyKnightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadyKnightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadyKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
