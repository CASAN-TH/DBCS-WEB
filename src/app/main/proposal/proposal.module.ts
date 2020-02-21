import { NgModule } from '@angular/core';
import { ProposalListComponent } from './list/proposalList.component';
import { ProposalFormComponent } from './form/proposalForm.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatProgressSpinnerModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProposalService } from './services/proposal.service';
import { PropListComponent } from './components/prop-list/prop-list.component';
import { Form001Component } from './components/form001/form001.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ProjectPipe } from './pipes/project.pipe';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatDialogModule } from '@angular/material/dialog';


const routes = [
  {
    path: "proposalForm/:id",
    component: ProposalFormComponent,
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
    ProposalListComponent,
    ProposalFormComponent,
    PropListComponent,
    Form001Component,
    ProjectPipe
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

    RichTextEditorAllModule,

    TranslateModule,
    FuseSharedModule,
    NgxDatatableModule
  ],
  exports: [
    ProposalListComponent,
    ProposalFormComponent
  ]
})
export class ProposalModule { }
