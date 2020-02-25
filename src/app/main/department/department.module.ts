import { NgModule } from '@angular/core';
import { DepartmentListComponent } from './list/departmentList.component';
import { DepartmentFormComponent } from './form/departmentForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "departmentForm/:id",
    component: DepartmentFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: DepartmentListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    DepartmentListComponent, 
    DepartmentFormComponent
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
    DepartmentListComponent,
    DepartmentFormComponent
  ]
})
export class DepartmentModule { }
