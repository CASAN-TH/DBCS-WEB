import { NgModule } from '@angular/core';
import { ProposalListComponent } from './list/proposalList.component';
import { ProposalFormComponent } from './form/proposalForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatProgressSpinnerModule, MatTreeModule, MatSliderModule, MatToolbarModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProposalService } from './services/proposal.service';
import { PropListComponent } from './components/prop-list/prop-list.component';
import { Form001Component } from './components/form001/form001.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ProjectPipe } from './pipes/project.pipe';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatDialogModule } from '@angular/material/dialog';
import { ProposalFormApproveComponent } from './proposal-form-approve/proposal-form-approve.component';
import { SafePipe } from 'app/safe-pipe.pipe';
import { ResizableModule } from "angular-resizable-element";
import { BudgetPlanComponent } from '../estimate/components/budget-plan/budget-plan.component';
import { FacesheetComponent } from '../estimate/components/facesheet/facesheet.component';



const routes = [
  {
    path: "proposalForm/:id",
    component: ProposalFormComponent,
    canActivate: [AuthenGuardService],
    resolve: { item: ProposalService }
  },
  {
    path: "proposalFormApprove/:id",
    component: ProposalFormApproveComponent,
    canActivate: [AuthenGuardService],
    resolve: { item: ProposalService }
  },
  {
    path: '**',
    component: ProposalListComponent,
    canActivate: [AuthenGuardService],
    resolve: { items: ProposalService }
  }
];

@NgModule({
  declarations: [
    SafePipe,
    ProposalListComponent,
    ProposalFormComponent,
    PropListComponent,
    Form001Component,
    ProjectPipe,
    ProposalFormApproveComponent,
    BudgetPlanComponent
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
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,

    MatTreeModule,
    MatSliderModule,
    MatToolbarModule,
    ResizableModule,

    RichTextEditorAllModule,

    TranslateModule,
    FuseSharedModule,
    NgxDatatableModule
  ],
  exports: [
    ProposalListComponent,
    ProposalFormComponent,
    ProposalFormApproveComponent
  ]
})
export class ProposalModule { }
