import { NgModule } from '@angular/core';
import { ReportListComponent } from './list/reportList.component';
import { ReportFormComponent } from './form/reportForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "ReportForm/:id",
    component: ReportFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: ReportListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    ReportListComponent, 
    ReportFormComponent
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
    ReportListComponent,
    ReportFormComponent
  ]
})
export class ReportModule { }
