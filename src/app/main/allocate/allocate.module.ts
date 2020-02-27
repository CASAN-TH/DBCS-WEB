import { NgModule } from '@angular/core';
import { AllocateListComponent } from './list/allocateList.component';
import { AllocateFormComponent } from './form/allocateForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllocTableListComponent } from './components/alloc-table-list/alloc-table-list.component';
import { AllocFormBodyComponent } from './components/alloc-form-body/alloc-form-body.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    AllocateFormComponent, AllocTableListComponent, AllocFormBodyComponent
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
    FuseSharedModule,
    NgxDatatableModule
  ],
  exports: [
    AllocateListComponent,
    AllocateFormComponent
  ]
})
export class AllocateModule { }
