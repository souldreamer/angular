import {ComponentFactory, Type} from '@angular/core';
import {StringMapWrapper, ListWrapper} from './facade/collection';
import {isBlank, isPresent, stringify} from './facade/lang';

export class Tree<T> {
  /** @internal */
  _root: TreeNode<T>;

  constructor(root: TreeNode<T>) { this._root = root; }

  get root(): T { return this._root.value; }

  parent(t: T): T {
    let p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }

  children(t: T): T[] {
    let n = _findNode(t, this._root);
    return isPresent(n) ? n.children.map(t => t.value) : null;
  }

  firstChild(t: T): T {
    let n = _findNode(t, this._root);
    return isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
  }

  pathFromRoot(t: T): T[] { return _findPath(t, this._root, []).map(s => s.value); }

  contains(tree: Tree<T>): boolean { return _contains(this._root, tree._root); }
}

export class UrlTree extends Tree<UrlSegment> {
  constructor(root: TreeNode<UrlSegment>) { super(root); }
}

export class RouteTree extends Tree<RouteSegment> {
  constructor(root: TreeNode<RouteSegment>) { super(root); }
}

export function rootNode<T>(tree: Tree<T>): TreeNode<T> {
  return tree._root;
}

function _findNode<T>(expected: T, c: TreeNode<T>): TreeNode<T> {
  // TODO: vsavkin remove it once recognize is fixed
  if (expected instanceof RouteSegment && equalSegments(<any>expected, <any>c.value)) return c;
  if (expected === c.value) return c;
  for (let cc of c.children) {
    let r = _findNode(expected, cc);
    if (isPresent(r)) return r;
  }
  return null;
}

function _findPath<T>(expected: T, c: TreeNode<T>, collected: TreeNode<T>[]): TreeNode<T>[] {
  collected.push(c);

  // TODO: vsavkin remove it once recognize is fixed
  if (_equalValues(expected, c.value)) return collected;

  for (let cc of c.children) {
    let r = _findPath(expected, cc, ListWrapper.clone(collected));
    if (isPresent(r)) return r;
  }

  return null;
}

function _contains<T>(tree: TreeNode<T>, subtree: TreeNode<T>): boolean {
  if (!_equalValues(tree.value, subtree.value)) return false;

  for (let subtreeNode of subtree.children) {
    let s = tree.children.filter(child => _equalValues(child.value, subtreeNode.value));
    if (s.length === 0) return false;
    if (!_contains(s[0], subtreeNode)) return false;
  }

  return true;
}

function _equalValues(a: any, b: any): boolean {
  if (a instanceof RouteSegment) return equalSegments(<any>a, <any>b);
  if (a instanceof UrlSegment) return equalUrlSegments(<any>a, <any>b);
  return a === b;
}

export class TreeNode<T> {
  constructor(public value: T, public children: TreeNode<T>[]) {}
}

export class UrlSegment {
  constructor(public segment: any, public parameters: {[key: string]: any}, public outlet: string) {
  }

  toString(): string {
    let outletPrefix = isBlank(this.outlet) ? "" : `${this.outlet}:`;
    return `${outletPrefix}${this.segment}${_serializeParams(this.parameters)}`;
  }
}

function _serializeParams(params: {[key: string]: string}): string {
  let res = "";
  StringMapWrapper.forEach(params, (v, k) => res += `;${k}=${v}`);
  return res;
}

export class RouteSegment {
  /** @internal */
  _type: Type;

  /** @internal */
  _componentFactory: ComponentFactory<any>;

  constructor(public urlSegments: UrlSegment[], public parameters: {[key: string]: any},
              public outlet: string, type: Type, componentFactory: ComponentFactory<any>) {
    this._type = type;
    this._componentFactory = componentFactory;
  }

  getParam(param: string): string {
    return isPresent(this.parameters) ? this.parameters[param] : null;
  }

  get type(): Type { return this._type; }

  get stringifiedUrlSegments(): string { return this.urlSegments.map(s => s.toString()).join("/"); }
}

export function serializeRouteSegmentTree(tree: RouteTree): string {
  return _serializeRouteSegmentTree(tree._root);
}

function _serializeRouteSegmentTree(node: TreeNode<RouteSegment>): string {
  let v = node.value;
  let children = node.children.map(c => _serializeRouteSegmentTree(c)).join(", ");
  return `${v.outlet}:${v.stringifiedUrlSegments}(${stringify(v.type)}) [${children}]`;
}

export function equalSegments(a: RouteSegment, b: RouteSegment): boolean {
  if (isBlank(a) && !isBlank(b)) return false;
  if (!isBlank(a) && isBlank(b)) return false;
  if (a._type !== b._type) return false;
  if (a.outlet != b.outlet) return false;
  return StringMapWrapper.equals(a.parameters, b.parameters);
}

export function equalUrlSegments(a: UrlSegment, b: UrlSegment): boolean {
  if (isBlank(a) && !isBlank(b)) return false;
  if (!isBlank(a) && isBlank(b)) return false;
  if (a.segment != b.segment) return false;
  if (a.outlet != b.outlet) return false;
  if (isBlank(a.parameters)) {
    console.log("a", a);
  }
  if (isBlank(b.parameters)) {
    console.log("b", b);
  }
  return StringMapWrapper.equals(a.parameters, b.parameters);
}

export function routeSegmentComponentFactory(a: RouteSegment): ComponentFactory<any> {
  return a._componentFactory;
}
