import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolMasterComponent } from './school-master.component';
import { AppSchoolMasterResolver } from './school-master.resolver';
import { SchoolMasterCreateComponent } from './school-master-create/school-master-create.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolMasterComponent,
    resolve: {
      masters: AppSchoolMasterResolver
    },
    children: [
      {
        path: '',
        component: SchoolMasterCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolMasterRoutingModule { }
