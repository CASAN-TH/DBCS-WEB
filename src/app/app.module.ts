import { NgModule, ErrorHandler, LOCALE_ID } from "@angular/core";
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
  MatSnackBarModule,
  NativeDateAdapter
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
import { GlobalErrorHandler } from "./global-error-handler";
import { ServerErrorInterceptor } from "./server-error.interceptor";
import { DialogConfirmModule } from "./dialog-confirm/dialog-confirm.module";
import { SafePipe } from './safe-pipe.pipe';

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMMM YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MM YYYY"
  }
};

export class CarDateAdapter extends NativeDateAdapter {

  /**
   * Formats the date as per the display format.
   * 
   * @param date The date
   * @param displayFormat The display format 
   */
  format(date: Date, displayFormat: Object): string {
      if(displayFormat === 'input') {
          let dayOfMonth : string = date.toLocaleDateString('default', { day: 'numeric' });
          let monthOfYear :  string = date.toLocaleDateString('default', { month: 'long' }).substring(0, 3);
          let year : number = date.getFullYear();
          return `${monthOfYear} ${dayOfMonth}, ${year}`;
      }
      return date.toDateString();
  }
}

const appRoutes: Routes = [
  {
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "strategic",
    loadChildren: "./main/strategic/strategic.module#StrategicModule"
  },
  {
    path: "expenditure",
    loadChildren: "./main/expenditure/expenditure.module#ExpenditureModule"
  },
  {
    path: "department",
    loadChildren: "./main/department/department.module#DepartmentModule"
  },
  {
    path: "estimateplan",
    loadChildren: "./main/estimateplan/estimateplan.module#EstimateplanModule"
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
    redirectTo: "proposal"
  }
];

@NgModule({
  declarations: [AppComponent],
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
    NgxSpinnerModule,
    DialogConfirmModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandler },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ServerErrorInterceptor,
    //   multi: true
    // },
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
