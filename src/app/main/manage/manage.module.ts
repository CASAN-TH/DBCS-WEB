import { NgModule } from '@angular/core';
import { ManageListComponent } from './list/manageList.component';
import { ManageFormComponent } from './form/manageForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "ManageForm/:id",
    component: ManageFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: ManageListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    ManageListComponent, 
    ManageFormComponent
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
    ManageListComponent,
    ManageFormComponent
  ]
})
export class ManageModule { }
