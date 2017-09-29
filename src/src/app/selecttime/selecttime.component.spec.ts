import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttimeComponent } from './selecttime.component';

describe('SelecttimeComponent', () => {
  let component: SelecttimeComponent;
  let fixture: ComponentFixture<SelecttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
