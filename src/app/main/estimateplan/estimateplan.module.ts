import { NgModule } from '@angular/core';
import { EstimateplanListComponent } from './list/estimateplanList.component';
import { EstimateplanFormComponent } from './form/estimateplanForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "EstimateplanForm/:id",
    component: EstimateplanFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: EstimateplanListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    EstimateplanListComponent, 
    EstimateplanFormComponent
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
    EstimateplanListComponent,
    EstimateplanFormComponent
  ]
})
export class EstimateplanModule { }
