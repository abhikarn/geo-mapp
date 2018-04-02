import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './geo-heirarchy.component';
import { GeoHeirarchyComponent } from './geo-heirarchy-list/geo-heirarchy-list.component';
import { ProductSegmentComponent } from './geo-heirarchy-mapping/geo-heirarchy-mapping.component';
import { AppProductResolver, AppProductSegmentResolver } from './geo-heirarchy.resolver';
import { GeoHeirarchyRouteConfig } from './geo-heirarchy-route-names';
const routes: Routes = [
  {
    path: GeoHeirarchyRouteConfig.default.routeName,
    component: ProductComponent,
    resolve: {
      products: AppProductResolver
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
        component: ProductSegmentComponent
      },
      {
        path: `:id/edit`,
        component: ProductSegmentComponent,
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
