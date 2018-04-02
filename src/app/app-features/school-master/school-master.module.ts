import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolMasterRoutingModule } from './school-master-routing.module';
import { SchoolMasterComponent } from './school-master.component';

@NgModule({
    imports: [
        CommonModule,
        SchoolMasterRoutingModule
    ],
    declarations: [SchoolMasterComponent]
})
export class SchoolMasterModule { }
