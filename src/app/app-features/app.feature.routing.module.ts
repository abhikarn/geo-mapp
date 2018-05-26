import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFeatureComponent } from './app.feature.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy/geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy/geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { SchoolMasterCreateComponent } from './school-master/school-master-create/school-master-create.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { CanLoginRouteGuard } from './login/login.route.guard';
import {
  AppFeatureResolver, AppFeatureMasterResolver, AppGeoMappResolver,
  AppSchoolListResolver, AppUserListResolver,
  AppSchoolResolver, AppSchoolGeoMappingDetail,
  AppSupervisorListResolver,
  AppHierarchyUserListResolver
} from './app.feature.resolver';
import { CanActivateHomeGuard } from './app.feature.route.guard';
import { SchoolMasterListComponent } from '@app/app-features/school-master/school-master-list/school-master-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent, resolve: {
      layout: AppFeatureResolver
    }
  },
  {
    path: 'engage',
    component: AppFeatureComponent,
    resolve: {
      layout: AppFeatureResolver,
      masters: AppFeatureMasterResolver
    },
    canActivate: [CanActivateHomeGuard],
    children: [
      {
        path: '', component: GeoHeirarchyListComponent, resolve: {
          geoMapp: AppGeoMappResolver
        },
        canActivate: [CanActivateHomeGuard]
      },

      {
        path: 'geo-heirarchy/create', component: GeoHeirarchyMapComponent,
        canActivate: [CanActivateHomeGuard]
      },
      {
        path: 'geo-heirarchy/:id/edit', component: GeoHeirarchyMapComponent, resolve: {
          geoMap: AppSchoolGeoMappingDetail,
          SupervisorLst: AppSupervisorListResolver,
          HierarchyLst: AppHierarchyUserListResolver
        },
        canActivate: [CanActivateHomeGuard]
      },
      {
        path: 'school-master', component: SchoolMasterListComponent, resolve: {
          schoolLst: AppSchoolListResolver
        },
        canActivate: [CanActivateHomeGuard]
      },

      { path: 'school-master/create', component: SchoolMasterCreateComponent, canActivate: [CanActivateHomeGuard] },
      {
        path: 'school-master/:id/edit', component: SchoolMasterCreateComponent, resolve: {
          school: AppSchoolResolver
        },
        canActivate: [CanActivateHomeGuard]
      },
      {
        path: 'user-master', component: UserMasterComponent, resolve: {
          userLst: AppUserListResolver
        },
        canActivate: [CanActivateHomeGuard]
      },
      {
        path: 'reset-password', component: ResetPasswordComponent,
        canActivate: [CanActivateHomeGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppFeatureResolver, AppFeatureMasterResolver, CanActivateHomeGuard]
})
export class AppFetaureRoutingModule { }
