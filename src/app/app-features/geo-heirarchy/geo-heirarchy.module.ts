import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSharedModule } from '@app/app-shared';

import {
  DataTableModule, SharedModule, SelectButtonModule, InputSwitchModule, MultiSelectModule,
  CalendarModule, TooltipModule, DialogModule, ConfirmDialogModule, ConfirmationService,
  InputTextModule, PaginatorModule, MessageModule, GrowlModule, InputMaskModule, DropdownModule
} from 'primeng/primeng';

import { GeoHeirarchyRoutingModule } from './geo-heirarchy-routing.module';
import { ProductComponent } from './geo-heirarchy.component';
import { GeoHeirarchyComponent } from './geo-heirarchy-list/geo-heirarchy-list.component';
import { ProductSegmentComponent } from './geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppProductResolver, AppProductSegmentResolver, AppProductCoverageResolver } from './geo-heirarchy.resolver';
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
    DropdownModule
  ],
  declarations: [
    ProductComponent,
    GeoHeirarchyComponent,
    ProductSegmentComponent
  ],
  providers: [AppProductResolver, ConfirmationService, AppProductSegmentResolver, AppProductCoverageResolver]
})
export class GeoHeirarchyModule { }
