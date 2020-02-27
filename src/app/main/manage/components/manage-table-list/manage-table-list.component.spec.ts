import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTableListComponent } from './manage-table-list.component';

describe('ManageTableListComponent', () => {
  let component: ManageTableListComponent;
  let fixture: ComponentFixture<ManageTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
