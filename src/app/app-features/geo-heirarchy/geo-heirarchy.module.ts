import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSharedModule } from '@app/app-shared';

import {
  DataTableModule, SharedModule, SelectButtonModule, InputSwitchModule, MultiSelectModule,
  CalendarModule, TooltipModule, DialogModule, ConfirmDialogModule, ConfirmationService,
  InputTextModule, PaginatorModule, MessageModule,
  GrowlModule, InputMaskModule, DropdownModule, CheckboxModule
} from 'primeng/primeng';

import { GeoHeirarchyRoutingModule } from './geo-heirarchy-routing.module';
import { GeoHeirarchyComponent } from './geo-heirarchy.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppProductResolver, AppGeoMappingDetail, AppMasterResolver, AppGeoMappResolver } from './geo-heirarchy.resolver';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppSharedModule,
    InputMaskModule,
    TextMaskModule,
    TooltipModule,
    DataTableModule,
    CalendarModule,
    SharedModule,
    SelectButtonModule,
    InputSwitchModule,
    GeoHeirarchyRoutingModule,
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
    MultiSelectModule
  ],
  declarations: [
    GeoHeirarchyComponent,
    GeoHeirarchyListComponent,
    GeoHeirarchyMapComponent
  ],
  providers: [
    AppProductResolver,
    ConfirmationService,
    AppGeoMappingDetail,
    AppMasterResolver,
    AppGeoMappResolver
  ]
})
export class GeoHeirarchyModule { }
