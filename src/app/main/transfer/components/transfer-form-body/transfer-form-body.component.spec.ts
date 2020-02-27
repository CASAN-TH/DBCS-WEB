import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormBodyComponent } from './transfer-form-body.component';

describe('TransferFormBodyComponent', () => {
  let component: TransferFormBodyComponent;
  let fixture: ComponentFixture<TransferFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
