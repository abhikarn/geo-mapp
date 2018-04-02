import { ComponentFactoryResolver, Injectable, Inject, ViewContainerRef } from '@angular/core';
@Injectable()
export class DynamicComponentService {
  constructor( @Inject(ComponentFactoryResolver) private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  addDynamicComponent(component, rootViewContainer: ViewContainerRef) {
    const factory = this.factoryResolver.resolveComponentFactory(component);
    const container = factory.create(rootViewContainer.parentInjector);
    rootViewContainer.insert(container.hostView);
  }
}
