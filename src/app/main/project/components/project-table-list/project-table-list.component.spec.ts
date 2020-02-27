import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableListComponent } from './project-table-list.component';

describe('ProjectTableListComponent', () => {
  let component: ProjectTableListComponent;
  let fixture: ComponentFixture<ProjectTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
