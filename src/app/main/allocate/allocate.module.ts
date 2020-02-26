import { NgModule } from '@angular/core';
import { AllocateListComponent } from './list/allocateList.component';
import { AllocateFormComponent } from './form/allocateForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "AllocateForm/:id",
    component: AllocateFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: AllocateListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    AllocateListComponent, 
    AllocateFormComponent
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
    AllocateListComponent,
    AllocateFormComponent
  ]
})
export class AllocateModule { }
