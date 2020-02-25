import { NgModule } from '@angular/core';
import { StrategicListComponent } from './list/strategicList.component';
import { StrategicFormComponent } from './form/strategicForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: "StrategicForm/:id",
    component: StrategicFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: StrategicListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    StrategicListComponent, 
    StrategicFormComponent
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
    StrategicListComponent,
    StrategicFormComponent
  ]
})
export class StrategicModule { }
