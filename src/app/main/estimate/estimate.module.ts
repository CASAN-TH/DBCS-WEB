import { NgModule } from "@angular/core";
import { EstimateComponent } from "./esrimate/estimate.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AuthenGuardService } from "app/authentication/authen-guard.service";
import { MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule } from "@angular/material";
import { EstimatesComponent } from "./estimates/estimates.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacesheetComponent } from './components/facesheet/facesheet.component';
import { BudgetPlanComponent } from './components/budget-plan/budget-plan.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResizableModule } from "angular-resizable-element";




import { ProposalFormComponent } from './components/proposal-form/proposal-form.component';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ProposalService } from '../proposal/services/proposal.service';

const routes = [
  {
    path: "detail",
    component: EstimateComponent,
    canActivate: [AuthenGuardService],
    resolve: { item: ProposalService }
  },
  {
    path: "detail/:id",
    component: EstimateComponent,
    canActivate: [AuthenGuardService],
    resolve: { item: ProposalService }
  },
  {
    path: "**",
    component: EstimatesComponent
    // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [EstimateComponent, EstimatesComponent, FacesheetComponent, BudgetPlanComponent, ProposalFormComponent],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatRadioModule,
    MatTabsModule,


    MatTreeModule,
    MatSliderModule,
    MatToolbarModule,
    ResizableModule,


    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,

    MatExpansionModule,
    RichTextEditorAllModule,

    NgxDatatableModule,

    TranslateModule,

    FuseSharedModule
  ],
  exports: [EstimateComponent, ProposalFormComponent]
})
export class EstimateModule { }
