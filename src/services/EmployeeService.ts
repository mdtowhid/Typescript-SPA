import Axios from "../classes/Axios.js";
import IEmployee from "../interfaces/IEmployee.js";

export default class EmployeeService {
  private _axios: Axios<IEmployee>;
  private _url = "../employees.json";
  constructor() {
    this._axios = new Axios<IEmployee>();
  }

  getEmployeeById = (id: string | number): Promise<IEmployee> =>
    this._axios.GetById(id, this._url);

  getEmployees = (): Promise<IEmployee[]> => this._axios.GetAll(this._url);
}
