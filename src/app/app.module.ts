import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavbar } from './home/side-navbar/side-navbar.component';
import { MainSection } from './home/main-section/main-section-component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/main-section/welcome/welcome.component';
/*Demo*/
import * as tm from './task-management/index';

// import { TaskManagementComponent } from './task-management/task-management.component';
/*Resuable Components*/
import { ListComponent } from './reusable_components/list/list.component';
import { NgMatDialogComponent } from './reusable_components/angular-material-dialog/ng-mat-dialog.component';
import { DynamicFormModule } from './reusable_modules/dynamic-form/dynamic-form.module';


import { AppRouting } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { httpInterceptorProviders } from './http-interceptors/index';
//import { RequestCache, RequestCacheWithMap } from './service/request-cache.service';
import { CommonService } from './service/common.service';
import { ReusableFunctionsService } from './service/reusable_functions.service';
import { LoginResolver } from './guards/login.resolve';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbar,
    MainSection,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    ...tm.TASK_MANAGEMENT,
    ListComponent,
    NgMatDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    TreeModule,
    DynamicFormModule,
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard,
    CommonService,
    ReusableFunctionsService,
    LoginResolver,
    //{ provide: RequestCache, useClass: RequestCacheWithMap },
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgMatDialogComponent, tm.TASK_MANAGEMENT_OBJ.TaskManagementFormComponent]
})
export class AppModule { }
