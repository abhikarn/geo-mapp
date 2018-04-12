import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SchoolMasterRoutingModule } from './school-master-routing.module';
import { SchoolMasterComponent } from './school-master.component';
import { AppSchoolMasterResolver } from './school-master.resolver';
import { SchoolMasterCreateComponent } from './school-master-create/school-master-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SchoolMasterRoutingModule
    ],
    declarations: [SchoolMasterComponent, SchoolMasterCreateComponent],
    providers: [AppSchoolMasterResolver]
})
export class SchoolMasterModule { }
