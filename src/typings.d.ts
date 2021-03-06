/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/* Extensions */
interface Array<T> {
  sum<T>(field?: string): number;
}
interface Array<T> {
  clone<T>(): T;
}
// interface Array<T> {
//   customSort<T>(fieldName: string): Array<T>;
// }
interface Date {
  clone(): Date;
}
/* Window Object */
interface Event {
  params: string;
}
