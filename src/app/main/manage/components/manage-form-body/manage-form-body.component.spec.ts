import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFormBodyComponent } from './manage-form-body.component';

describe('ManageFormBodyComponent', () => {
  let component: ManageFormBodyComponent;
  let fixture: ComponentFixture<ManageFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
