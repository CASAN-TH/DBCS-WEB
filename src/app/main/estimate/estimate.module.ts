import { NgModule } from "@angular/core";
import { EstimateComponent } from "./esrimate/estimate.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AuthenGuardService } from "app/authentication/authen-guard.service";
import { MatIconModule } from "@angular/material";
import { EstimatesComponent } from "./estimates/estimates.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable"

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
  declarations: [EstimateComponent, EstimatesComponent],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    NgxDatatableModule,

    TranslateModule,

    FuseSharedModule
  ],
  exports: [EstimateComponent]
})
export class EstimateModule {}
