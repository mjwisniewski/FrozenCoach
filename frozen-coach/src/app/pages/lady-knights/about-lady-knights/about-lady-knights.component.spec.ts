import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLadyKnightsComponent } from './about-lady-knights.component';

describe('AboutLadyKnightsComponent', () => {
  let component: AboutLadyKnightsComponent;
  let fixture: ComponentFixture<AboutLadyKnightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLadyKnightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLadyKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
