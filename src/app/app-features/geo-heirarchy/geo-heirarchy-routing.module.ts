import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoHeirarchyComponent } from './geo-heirarchy.component';
import { GeoHeirarchyListComponent } from './geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppProductResolver, AppGeoMappingDetail, AppMasterResolver, AppGeoMappResolver } from './geo-heirarchy.resolver';
import { GeoHeirarchyRouteConfig } from './geo-heirarchy-route-names';
const routes: Routes = [
  {
    path: GeoHeirarchyRouteConfig.default.routeName,
    component: GeoHeirarchyComponent,
    resolve: {
      masters: AppMasterResolver
    },
    children: [
      {
        path: GeoHeirarchyRouteConfig.default.routeName,
        component: GeoHeirarchyListComponent,
        resolve: {
          products: AppProductResolver,
          geoMapp: AppGeoMappResolver
        }
      },
      {
        path: GeoHeirarchyRouteConfig.geoheirarchyCreate.routeName,
        component: GeoHeirarchyMapComponent
      },
      {
        path: `:id/edit`,
        component: GeoHeirarchyMapComponent,
        resolve: {
          geoMap: AppGeoMappingDetail
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoHeirarchyRoutingModule { }
