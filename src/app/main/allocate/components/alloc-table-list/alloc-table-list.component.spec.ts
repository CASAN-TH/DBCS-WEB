import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocTableListComponent } from './alloc-table-list.component';

describe('AllocTableListComponent', () => {
  let component: AllocTableListComponent;
  let fixture: ComponentFixture<AllocTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
