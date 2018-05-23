import {
  Component, OnInit, Input, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { MenuConfig } from 'app/app-core/models/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  private componentRef: ComponentRef<any>;
  @ViewChild('dynamiclayout', { read: ViewContainerRef })
  private container: ViewContainerRef;
  @Input() dynamicHeader: { component: any, menuConfig: MenuConfig };

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.createDynamicHeader(this.dynamicHeader);
  }

  createDynamicHeader(dynamicHeader: any) {
    this.container.remove();
    const componentFactory = this.resolver.resolveComponentFactory(dynamicHeader.component);
    this.componentRef = this.container.createComponent(componentFactory);
    this.componentRef.instance.menuConfig = dynamicHeader.menuConfig;
  }
}

