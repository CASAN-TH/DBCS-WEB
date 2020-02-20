import { NgModule } from "@angular/core";
import { EstimateComponent } from "./esrimate/estimate.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AuthenGuardService } from "app/authentication/authen-guard.service";
import { MatIconModule,MatMenuModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatRadioModule, MatInputModule, MatListModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { EstimatesComponent } from "./estimates/estimates.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacesheetComponent } from './components/facesheet/facesheet.component';
import { BudgetPlanComponent } from './components/budget-plan/budget-plan.component';


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
  declarations: [EstimateComponent, EstimatesComponent, FacesheetComponent, BudgetPlanComponent],
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

    NgxDatatableModule,

    TranslateModule,

    FuseSharedModule
  ],
  exports: [EstimateComponent]
})
export class EstimateModule {}
