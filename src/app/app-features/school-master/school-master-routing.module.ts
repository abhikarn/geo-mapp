import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolMasterComponent } from './school-master.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolMasterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolMasterRoutingModule { }
