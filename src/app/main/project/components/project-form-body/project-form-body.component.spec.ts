import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormBodyComponent } from './project-form-body.component';

describe('ProjectFormBodyComponent', () => {
  let component: ProjectFormBodyComponent;
  let fixture: ComponentFixture<ProjectFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
