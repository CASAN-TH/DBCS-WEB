import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTableListComponent } from './transfer-table-list.component';

describe('TransferTableListComponent', () => {
  let component: TransferTableListComponent;
  let fixture: ComponentFixture<TransferTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
