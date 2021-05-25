var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
        this.x = "<h1>Employee List works</h1>";
    }
    EmployeeList.prototype.onInitEmployees = function (models) {
        var temp = "";
        models.forEach(function (emp) {
            temp += "<h5>" + emp.name + "</h5>";
        });
        return temp;
    };
    return EmployeeList;
}());
export default EmployeeList;
