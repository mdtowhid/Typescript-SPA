import Axios from "../Axios.js";
export class Employee {
    /**
     *
     */
    constructor() {
        this.url = "";
        this.employee = new Employee();
        this.axios = new Axios();
    }
    getEmployee(id) {
        return this.axios.GetById(id, this.url);
    }
}
