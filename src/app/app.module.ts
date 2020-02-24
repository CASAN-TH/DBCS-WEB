import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import {
  MatMomentDateModule,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  MatButtonModule,
  MatIconModule,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatSnackBarModule
} from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
  FuseProgressBarModule,
  FuseSidebarModule,
  FuseThemeOptionsModule
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalComfirmComponent } from "./modals/modal-comfirm/modal-comfirm.component";
import { GlobalErrorHandler } from './global-error-handler';
import { ServerErrorInterceptor } from './server-error.interceptor';


export const MY_FORMATS = {
    parse: {
      dateInput: "DD/MM/YYYY"
    },
    display: {
      dateInput: "DD/MM/YYYY",
      monthYearLabel: "MM YYYY",
      dateA11yLabel: "DD/MM/YYYY",
      monthYearA11yLabel: "MM YYYY"
    }
  };

const appRoutes: Routes = [
  {
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "estimate",
    loadChildren: "./main/estimate/estimate.module#EstimateModule"
  },
  {
    path: "proposal",
    loadChildren: "./main/proposal/proposal.module#ProposalModule"
  },
  {
    path: "**",
    redirectTo: "estimate"
  }
];

@NgModule({
  declarations: [AppComponent, ModalComfirmComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule,
    NgxSpinnerModule
  ],
  entryComponents: [ModalComfirmComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: "th-TH" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class AppModule {}


