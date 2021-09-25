import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenCoachComponent } from './frozen-coach.component';

describe('FrozenCoachComponent', () => {
  let component: FrozenCoachComponent;
  let fixture: ComponentFixture<FrozenCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
