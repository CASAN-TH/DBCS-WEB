import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFormApproveComponent } from './proposal-form-approve.component';

describe('ProposalFormApproveComponent', () => {
  let component: ProposalFormApproveComponent;
  let fixture: ComponentFixture<ProposalFormApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalFormApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalFormApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
