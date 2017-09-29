import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalSettingsComponent } from './interval-settings.component';

describe('IntervalSettingsComponent', () => {
  let component: IntervalSettingsComponent;
  let fixture: ComponentFixture<IntervalSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
