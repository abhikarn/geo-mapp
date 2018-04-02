import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppBaseComponent } from '@app/app-core';
import { Product, ProductSegment } from '@app/app-core';
import { GeoHeirarchyRouteConfig } from '../geo-heirarchy-route-names';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'app-geo-heirarchy-list',
  templateUrl: './geo-heirarchy-list.component.html',
  styleUrls: ['./geo-heirarchy-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeoHeirarchyComponent extends AppBaseComponent implements OnInit {
  product: Product;
  productSegment: ProductSegment[];
  data = false;
  sortF: string;
  pageinationcount = '';
  successMsg = false;
  msg: string;
  display = false;
  success: Message[] = [];
  currentPage = 0;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.product = this.activeRoute.snapshot.data.products;
    this.productSegment = this.product.productSegments.result.slice(0, 8);
  }

  addProductSegment() {
    this.router.navigateByUrl(`geo-heirarchy/${GeoHeirarchyRouteConfig.geoheirarchyCreate.routeName}`);
  }

  editProductSegment(segment: ProductSegment) {
    this.router.navigateByUrl(`geo-heirarchy/${segment.productSegmentId}/edit`);
  }

  updatePage(event) {
    this.currentPage = +event.page;
    this.productSegment = this.product.productSegments.result.slice(event.first, +event.first + +event.rows);
  }
}
