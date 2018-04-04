import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './geo-heirarchy.component';
import { GeoHeirarchyComponent } from './geo-heirarchy-list/geo-heirarchy-list.component';
import { GeoHeirarchyMapComponent } from './geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppProductResolver, AppProductSegmentResolver, AppMasterResolver } from './geo-heirarchy.resolver';
import { GeoHeirarchyRouteConfig } from './geo-heirarchy-route-names';
const routes: Routes = [
  {
    path: GeoHeirarchyRouteConfig.default.routeName,
    component: ProductComponent,
    resolve: {
      masters: AppMasterResolver
    },
    children: [
      {
        path: GeoHeirarchyRouteConfig.default.routeName,
        component: GeoHeirarchyComponent,
        resolve: {
          products: AppProductResolver
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
          segment: AppProductSegmentResolver
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
