export interface IHttpInterceptor<T> {
  code: number;
  status: string;
  handler?: T | Function;
}
