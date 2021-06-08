import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppGridListComponent } from './components/grid/app-grid-list.component';
import { AppGridItemComponent } from './components/grid/app-grid-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree/';
import { MatIconModule } from '@angular/material/icon';
import { LayoutManagerService } from './services/layout-manager.service';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardViewsService } from './services/dashboard-views.service';
import { CustomMaterialModule } from './modules/custom-material.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServerErrorInterceptor } from './server-error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AppGridListComponent,
        AppGridItemComponent,
        SideNavComponent,
        DialogFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatGridListModule,
        DragDropModule,
        CustomMaterialModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule,
        MatTreeModule
    ],
    providers: [
        LayoutManagerService,
        DashboardViewsService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
