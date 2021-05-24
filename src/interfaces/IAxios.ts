export interface IAxios<T> {
  GetById(id: string | number, url: string): Promise<T>;
  GetAll(url: string): Promise<T[]>;
  Update(obj: T, url: string): Promise<T>;
  DeleteById(id: string | number, url: string): Promise<T>;
}
