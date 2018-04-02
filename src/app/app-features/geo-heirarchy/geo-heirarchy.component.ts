import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/app-core';
@Component({
  selector: 'app-geo-heirarchy',
  templateUrl: './geo-heirarchy.component.html',
  styleUrls: ['./geo-heirarchy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.product = this.activeRoute.snapshot.data['products'];
  }
}

