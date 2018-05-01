import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './directives/form-validations/form-forbidden.directive';
import { ForbiddenTextDirective } from './directives/block-copy-paste';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ProductTilesComponent } from './product-tiles-component/product-tiles.component';
import { PaginationComponent } from './pagination-component/pagination.component';
import { PaginatorModule, DialogModule, ConfirmDialogModule } from 'primeng/primeng';
import { ConfirmDialogComponent } from './modal-components/confirm-box-modal-component/confirm-dialog-box.component';
import { SaveDialogComponent } from './modal-components/save-box-modal-component/save-dialog-box.component';
import { DynamicComponentService } from './services/dynamic-component.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginatorModule,
    DialogModule,
    ConfirmDialogModule
  ],
  declarations: [ForbiddenValidatorDirective,
    ProductTilesComponent,
    PaginationComponent,
    ForbiddenTextDirective,
    ConfirmDialogComponent,
    SaveDialogComponent,
    OnlyNumberDirective
  ],
  exports: [
    ForbiddenValidatorDirective,
    ProductTilesComponent,
    PaginationComponent,
    ForbiddenTextDirective,
    ConfirmDialogComponent,
    SaveDialogComponent,
    OnlyNumberDirective
  ],
  entryComponents: [ConfirmDialogComponent,
    SaveDialogComponent],
  providers: [DynamicComponentService]
})
export class AppSharedModule { }
