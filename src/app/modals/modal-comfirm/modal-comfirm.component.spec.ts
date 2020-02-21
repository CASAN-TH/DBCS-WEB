import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComfirmComponent } from './modal-comfirm.component';

describe('ModalComfirmComponent', () => {
  let component: ModalComfirmComponent;
  let fixture: ComponentFixture<ModalComfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
