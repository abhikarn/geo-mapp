import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MasterRoutingModule
    ],
    declarations: [MasterComponent]
})
export class MasterModule { }
