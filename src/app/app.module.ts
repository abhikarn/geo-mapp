import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@app/app-core/utility/extensions/array';
import '@app/app-core/utility/extensions/date';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { AppFeatureModule } from '@app/app-features';
import { DataTableModule, SharedModule, SelectButtonModule, InputSwitchModule, CalendarModule, TooltipModule } from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    TooltipModule,
    DataTableModule,
    CalendarModule,
    SharedModule,
    SelectButtonModule,
    InputSwitchModule,
    AppFeatureModule
  ],
  providers: [AppConfig, {
    provide: APP_INITIALIZER, useFactory: loadConfig,
    deps: [AppConfig], multi: true
  },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function loadConfig(config: AppConfig) {
  return () => config.load();
}
