import { NgModule } from '@angular/core';
import { TransferListComponent } from './list/transferList.component';
import { TransferFormComponent } from './form/transferForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferTableListComponent } from './components/transfer-table-list/transfer-table-list.component';
import { TransferFormBodyComponent } from './components/transfer-form-body/transfer-form-body.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes = [
  {
    path: "TransferForm/:id",
    component: TransferFormComponent
    // canActivate: [AuthenGuardService]
  },
  {
      path     : '**',
      component: TransferListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [
    TransferListComponent, 
    TransferFormComponent, TransferTableListComponent, TransferFormBodyComponent
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
    TransferListComponent,
    TransferFormComponent
  ]
})
export class TransferModule { }
