import { NgModule } from '@angular/core';
import { ProjectListComponent } from './list/projectList.component';
import { ProjectFormComponent } from './form/projectForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectTableListComponent } from './components/project-table-list/project-table-list.component';
import { ProjectFormBodyComponent } from './components/project-form-body/project-form-body.component';

const routes = [
  {
    path: "ProjectForm/:id",
    component: ProjectFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: ProjectListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    ProjectListComponent, 
    ProjectFormComponent, ProjectTableListComponent, ProjectFormBodyComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatRadioModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,

    TranslateModule,
    FuseSharedModule
  ],
  exports: [
    ProjectListComponent,
    ProjectFormComponent
  ]
})
export class ProjectModule { }
