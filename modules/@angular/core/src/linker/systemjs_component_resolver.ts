import { ComponentResolver } from './component_resolver';
import { Type, isString, global } from '../../src/facade/lang';
import { ComponentFactory } from './component_factory';

/**
 * Component resolver that can load components lazily
 */
export class SystemJsComponentResolver implements ComponentResolver {
  constructor(private _resolver: ComponentResolver) {}

  resolveComponent(componentType:string|Type):Promise<ComponentFactory<any>> {
    if (isString(componentType)) {
      return (<any>global).System.import(componentType).then(module =>
        this._resolver.resolveComponent(module.default));
    } else {
      return this._resolver.resolveComponent(<Type>componentType);
    }
  }

  clearCache() {}
}
