import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/layout-templates/header/header.component';
import { FooterComponent } from './layout/layout-templates/footer/footer.component';
import { InMemoryWebServiceService } from './services/web-services/in-memory-web-service.service';
import { WebService } from './services/web-services/web-service.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebServiceService, { passThruUnknownUrl: true })
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent],
  entryComponents: [HeaderComponent],
  providers: [WebService]
})
export class AppCoreModule { }
