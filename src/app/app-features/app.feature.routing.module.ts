import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFeatureComponent } from './app.feature.component';
import { AppFeatureResolver, AppFeatureMasterResolver } from './app.feature.resolver';

const routes: Routes = [
  {
    path: '',
    component: AppFeatureComponent,
    resolve: {
      layout: AppFeatureResolver,
      masters: AppFeatureMasterResolver
    },
    children: [
      { path: '', redirectTo: '/geo-heirarchy', pathMatch: 'full' },

      { path: 'geo-heirarchy', loadChildren: 'app/app-features/geo-heirarchy/geo-heirarchy.module#GeoHeirarchyModule' }

      // { path: 'dashboard', loadChildren: 'app/app-features/dashboard/dashboard.module#DashboardModule' },

      // { path: 'master', loadChildren: 'app/app-features/masters/master.module#MasterModule' },

      // { path: 'school-master', loadChildren: 'app/app-features/school-master/school-master.module#SchoolMasterModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppFeatureResolver, AppFeatureMasterResolver]
})
export class AppFetaureRoutingModule { }
