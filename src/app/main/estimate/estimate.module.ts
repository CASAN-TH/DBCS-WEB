import { NgModule } from "@angular/core";
import { EstimateComponent } from "./esrimate/estimate.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AuthenGuardService } from "app/authentication/authen-guard.service";
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule } from "@angular/material";
import { EstimatesComponent } from "./estimates/estimates.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacesheetComponent } from './components/facesheet/facesheet.component';
import { ProposalFormComponent } from './components/proposal-form/proposal-form.component';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

const routes = [
  {
    path: "detail",
    component: EstimateComponent
    // canActivate: [AuthenGuardService]
  },
  {
    path: "**",
    component: EstimatesComponent
    // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [EstimateComponent, EstimatesComponent, FacesheetComponent, ProposalFormComponent],
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
export class EstimateModule {}
