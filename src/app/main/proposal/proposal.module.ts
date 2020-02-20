import { NgModule } from '@angular/core';
import { ProposalListComponent } from './list/proposalList.component';
import { ProposalFormComponent } from './form/proposalForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ProposalService } from './services/proposal.service';
=======
import { PropListComponent } from './components/prop-list/prop-list.component';
>>>>>>> 8c2f30d033933bc176cab83d27055c5f174d4cfe

const routes = [
  {
    path: "proposalForm/:id",
    component: ProposalFormComponent,
    canActivate: [AuthenGuardService],
    resolve: [ProposalService]
  },
  {
<<<<<<< HEAD
      path     : '**',
      component: ProposalListComponent,
      canActivate: [AuthenGuardService],
      resolve: [ProposalService]
=======
    path: '**',
    component: ProposalListComponent,
    // canActivate: [AuthenGuardService]
>>>>>>> 8c2f30d033933bc176cab83d27055c5f174d4cfe
  }
];

@NgModule({
  declarations: [
    ProposalListComponent,
    ProposalFormComponent,
    PropListComponent
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
    ProposalListComponent,
    ProposalFormComponent
  ]
})
export class ProposalModule { }
