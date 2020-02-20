import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesheetComponent } from './facesheet.component';

describe('FacesheetComponent', () => {
  let component: FacesheetComponent;
  let fixture: ComponentFixture<FacesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
