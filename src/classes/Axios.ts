import { IAxios } from "../interfaces/IAxios";
import IMovie from "../interfaces/IMovie";

export default class Axios<T extends { id?: string | number | IMovie }> implements IAxios<T> {

  GetById(id: string | number, url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      const data = (await this.GetAll(url)) as unknown as T[];
      if (Array.isArray(data) && data.length > 0) {
        let result = data.find((d) => d.id === id);
        result ? resolve(result) : reject(new Error("error"));
      }
    });
  } 
  GetAll(url: string): Promise<T[]> {
    return new Promise(async (resolve, reject) => {
      const req = await fetch(url);
      const res = await req.json();
      (await res) !== null ? resolve(await res) : reject(new Error("error"));
    });
  }

  Update(obj: T, url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      const data = (await this.GetAll(url)) as unknown as T[];
      if (Array.isArray(data) && data.length > 0) {
        let result = data.find((d) => d.id === obj.id);
        if (result) {
        }
        result ? resolve(result) : reject(new Error("error"));
      }
    });
  }
  DeleteById(id: string | number, url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let spliced: any = null;
      const data = (await this.GetAll(url)) as unknown as T[];
      if (Array.isArray(data) && data.length > 0) {
        let result = data.find((d) => d.id === id);
        const index = data.map((x) => x.id === id).indexOf(id === id);
        if (result && index !== -1) {
          spliced = data.splice(index, 1);
        }
        result ? resolve(result) : reject(new Error("error"));
      }
    });
  }
}