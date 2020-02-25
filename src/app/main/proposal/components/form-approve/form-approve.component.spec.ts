import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApproveComponent } from './form-approve.component';

describe('FormApproveComponent', () => {
  let component: FormApproveComponent;
  let fixture: ComponentFixture<FormApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
