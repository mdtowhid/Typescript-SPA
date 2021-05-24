import Axios from "../classes/Axios.js";
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        var _this = this;
        this._url = "../employees.json";
        this.getEmployeeById = function (id) {
            return _this._axios.GetById(id, _this._url);
        };
        this.getEmployees = function () { return _this._axios.GetAll(_this._url); };
        this._axios = new Axios();
    }
    return EmployeeService;
}());
export default EmployeeService;
