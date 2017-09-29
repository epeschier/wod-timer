import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountinComponent } from './countin.component';

describe('CountinComponent', () => {
  let component: CountinComponent;
  let fixture: ComponentFixture<CountinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
