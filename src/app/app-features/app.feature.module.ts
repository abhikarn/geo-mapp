import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFetaureRoutingModule } from './app.feature.routing.module';
import { AppFeatureComponent } from './app.feature.component';
import { AppCoreModule, GlobalHttpErrorInterceptorProvider } from '@app/app-core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppCoreModule,
    AppFetaureRoutingModule
  ],
  declarations: [AppFeatureComponent],
  exports: [AppFeatureComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GlobalHttpErrorInterceptorProvider]
})
export class AppFeatureModule { }
