import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  DataTableModule, SharedModule, SelectButtonModule, InputSwitchModule, MultiSelectModule,
  CalendarModule, TooltipModule, DialogModule, ConfirmDialogModule, ConfirmationService,
  InputTextModule, PaginatorModule, MessageModule,
  GrowlModule, InputMaskModule, DropdownModule, CheckboxModule
} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFetaureRoutingModule } from './app.feature.routing.module';
import { AppFeatureComponent } from './app.feature.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy/geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy/geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppCoreModule, GlobalHttpErrorInterceptorProvider } from '@app/app-core';
import {
  AppFeatureResolver, AppFeatureMasterResolver,
  AppGeoMappResolver, AppGeoMappingDetail
} from './app.feature.resolver';
import { SchoolMasterCreateComponent } from './school-master/school-master-create/school-master-create.component';
import { UserMasterComponent } from './user-master/user-master.component';


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
    AppCoreModule,
    AppFetaureRoutingModule
  ],
  declarations: [
    AppFeatureComponent,
    GeoHeirarchyListComponent,
    GeoHeirarchyMapComponent,
    SchoolMasterCreateComponent,
    UserMasterComponent
  ],
  exports: [AppFeatureComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    GlobalHttpErrorInterceptorProvider,
    ConfirmationService,
    AppFeatureResolver,
    AppFeatureMasterResolver,
    AppGeoMappResolver,
    AppGeoMappingDetail
  ]
})
export class AppFeatureModule { }
