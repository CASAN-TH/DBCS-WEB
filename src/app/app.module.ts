import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { TestComponent } from './main/test/test.component';
import { FooComponent } from './main/foo/foo.component';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './main/ccc/ccc.component';
import { EeeComponent } from './main/eee/eee.component';
import { FffComponent } from './main/fff/fff.component';

const appRoutes: Routes = [
    {
        path        : 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path : 'estimate',
        loadChildren: './main/estimate/estimate.module#EstimateModule'
    },
    {
        path      : '**',
        redirectTo: 'estimate'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        FooComponent,
        AaaComponent,
        BbbComponent,
        CccComponent,
        EeeComponent,
        FffComponent
    ],
    imports     : [
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

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
