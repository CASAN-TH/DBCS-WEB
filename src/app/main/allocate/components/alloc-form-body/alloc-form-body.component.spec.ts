import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocFormBodyComponent } from './alloc-form-body.component';

describe('AllocFormBodyComponent', () => {
  let component: AllocFormBodyComponent;
  let fixture: ComponentFixture<AllocFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
