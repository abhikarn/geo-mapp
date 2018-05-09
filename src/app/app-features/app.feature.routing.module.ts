import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFeatureComponent } from './app.feature.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy/geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy/geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { SchoolMasterCreateComponent } from './school-master/school-master-create/school-master-create.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { LoginComponent } from './login/login.component';
// import { CanLoginRouteGuard } from './login/login.route.guard';
import {
  AppFeatureResolver, AppFeatureMasterResolver, AppGeoMappResolver,
  AppSchoolListResolver, AppUserListResolver,
  AppSchoolResolver, AppSchoolGeoMappingDetail
} from './app.feature.resolver';
import { CanActivateRouteGuard } from './app.feature.route.guard';
import { SchoolMasterListComponent } from '@app/app-features/school-master/school-master-list/school-master-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent, resolve: {
      layout: AppFeatureResolver
    },
    // canActivate: [CanLoginRouteGuard],
  },
  {
    path: 'engage',
    component: AppFeatureComponent,
    resolve: {
      layout: AppFeatureResolver,
      masters: AppFeatureMasterResolver
    },
    canActivate: [CanActivateRouteGuard],
    children: [
      {
        path: '', component: GeoHeirarchyListComponent, resolve: {
          geoMapp: AppGeoMappResolver
        }
      },

      { path: 'geo-heirarchy/create', component: GeoHeirarchyMapComponent },
      {
        path: 'geo-heirarchy/:id/edit', component: GeoHeirarchyMapComponent, resolve: {
          geoMap: AppSchoolGeoMappingDetail
        },
      },
      {
        path: 'school-master', component: SchoolMasterListComponent, resolve: {
          schoolLst: AppSchoolListResolver
        }
      },

      { path: 'school-master/create', component: SchoolMasterCreateComponent },
      {
        path: 'school-master/:id/edit', component: SchoolMasterCreateComponent, resolve: {
          school: AppSchoolResolver
        },
      },
      // {
      //   path: 'school-master', component: SchoolMasterCreateComponent, resolve: {
      //     schoolLst: AppSchoolListResolver
      //   },
      // },
      {
        path: 'user-master', component: UserMasterComponent, resolve: {
          userLst: AppUserListResolver
        },
        // canActivate: [CanLoginRouteGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppFeatureResolver, AppFeatureMasterResolver]
})
export class AppFetaureRoutingModule { }
