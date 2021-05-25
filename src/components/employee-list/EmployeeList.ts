import IEmployee from "../../interfaces/IEmployee";

export default class EmployeeList {
    x=`<h1>Employee List works</h1>`;

    onInitEmployees(models: IEmployee[]){
        let temp = ``;
        models.forEach(emp => {
            temp+=`<h5>${emp.name}</h5>`
        });

        return temp;
    }
}
