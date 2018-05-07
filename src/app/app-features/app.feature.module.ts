import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertsModule } from 'angular-alert-module';

import {
  DataTableModule, SharedModule, SelectButtonModule, InputSwitchModule, MultiSelectModule,
  CalendarModule, TooltipModule, DialogModule, ConfirmDialogModule, ConfirmationService,
  InputTextModule, PaginatorModule, MessageModule,
  GrowlModule, InputMaskModule, DropdownModule, CheckboxModule,
  ToggleButtonModule
} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFetaureRoutingModule } from './app.feature.routing.module';
import { AppFeatureComponent } from './app.feature.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy/geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy/geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppCoreModule } from '@app/app-core';
import { AppSharedModule } from '@app/app-shared';
import {
  AppFeatureResolver, AppFeatureMasterResolver,
  AppGeoMappResolver, AppGeoMappingDetail,
  AppSchoolListResolver, AppUserListResolver,
  AppSchoolResolver, AppSchoolGeoMappingDetail
} from './app.feature.resolver';
import { CanActivateRouteGuard } from './app.feature.route.guard';
import { SchoolMasterCreateComponent } from './school-master/school-master-create/school-master-create.component';
import { SchoolMasterListComponent } from './school-master/school-master-list/school-master-list.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
// import { CanLoginRouteGuard } from './login/login.route.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    TooltipModule,
    DataTableModule,
    CalendarModule,
    SharedModule,
    SelectButtonModule,
    InputSwitchModule,
    DialogModule,
    ConfirmDialogModule,
    MessageModule,
    MultiSelectModule,
    InputTextModule,
    PaginatorModule,
    MessageModule,
    GrowlModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    TableModule,
    AppCoreModule,
    AppSharedModule,
    AppFetaureRoutingModule,
    ToggleButtonModule,
    AlertsModule.forRoot()
  ],
  declarations: [
    AppFeatureComponent,
    GeoHeirarchyListComponent,
    GeoHeirarchyMapComponent,
    SchoolMasterCreateComponent,
    SchoolMasterListComponent,
    UserMasterComponent,
    LoginComponent
  ],
  exports: [AppFeatureComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // GlobalHttpErrorInterceptorProvider,
    ConfirmationService,
    AppFeatureResolver,
    AppFeatureMasterResolver,
    AppGeoMappResolver,
    AppGeoMappingDetail,
    AppSchoolListResolver,
    AppUserListResolver,
    CanActivateRouteGuard,
    AppSchoolResolver,
    AppSchoolGeoMappingDetail
    // CanLoginRouteGuard
  ]
})
export class AppFeatureModule { }
