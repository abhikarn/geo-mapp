import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFeatureComponent } from './app.feature.component';
import { AppFeatureResolver } from './app.feature.resolver';

const routes: Routes = [
  {
    path: '',
    component: AppFeatureComponent,
    resolve: {
      layout: AppFeatureResolver
    },
    children: [
      { path: '', redirectTo: '/geo-heirarchy', pathMatch: 'full' },

      { path: 'geo-heirarchy', loadChildren: 'app/app-features/geo-heirarchy/geo-heirarchy.module#GeoHeirarchyModule' },

      { path: 'dashboard', loadChildren: 'app/app-features/dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppFeatureResolver]
})
export class AppFetaureRoutingModule { }
