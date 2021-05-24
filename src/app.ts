import Card from "./components/card/Card.js";
import Home from "./components/home/Home.js";
import Navbar from "./components/nav/Navbar.js";
import Spinner from "./components/spinner/Spinner.js";
import Table from "./components/table/Table.js";
import { Common } from "./enums/Common.enum.js";
import DomSelector from "./helpers/DomSelector.js";
import Observable from "./helpers/Observable.js";
import { IDomSelectedObjects } from "./interfaces/IDomSelectedObjects.js";
import IEmployee from "./interfaces/IEmployee.js";
import IMovie from "./interfaces/IMovie.js";
import EmployeeService from "./services/EmployeeService.js";
import MovieService from "./services/MovieService.js";

window.addEventListener('DOMContentLoaded', async e => {
    let topMenuAnhcors: any = null;
    const movieService = new MovieService();
    const movies: IMovie[] = await movieService.getMovies();
    
    const employeeService = new EmployeeService();
    const employees: IEmployee[] = await employeeService.getEmployees();
    const employee: IEmployee = await employeeService.getEmployeeById(1);

    let domSelectedObject: IDomSelectedObjects = DomSelector.initDoms();
    domSelectedObject.navbar!.innerHTML = Navbar.navbar;
    domSelectedObject.renderBody!.innerHTML = Home.homeComponet;

    setTimeout(() => {
        const anchors:any[] = DomSelector.initDoms().topMenuAnchors;
        anchors.forEach(element => {
            const htmlAnchorElement = element as HTMLAnchorElement;
            htmlAnchorElement.addEventListener('click', e=>{
                Observable.observable(domSelectedObject.renderBody!, {
                  childList: true,
                  oldValue: true,
                });

                const attrHref = htmlAnchorElement.getAttribute("component");
                
                if (attrHref === "home") {
                  domSelectedObject.renderBody!.innerHTML = Spinner.getSpinner(
                    Common.LinearSpinner.toString()
                  );
                  setTimeout(() => {
                    domSelectedObject.renderBody!.innerHTML = Home.homeComponet;
                  }, 1000);
                }

                if (attrHref === "table") {
                  domSelectedObject.renderBody!.innerHTML = Spinner.getSpinner(
                    Common.LinearSpinner.toString()
                  );
                  setTimeout(() => {
                    domSelectedObject.renderBody!.innerHTML =
                      Table.makeTable(movies);
                  }, 1000);
                }

                if (attrHref === "navbar")
                    domSelectedObject.renderBody!.innerHTML = Navbar.navbar;

                if (attrHref === "blogs") {
                  domSelectedObject.renderBody!.innerHTML = Spinner.getSpinner(
                    Common.LinearSpinner.toString()
                  );
                  setTimeout(() => {
                    domSelectedObject.renderBody!.innerHTML = Card.cardForMovie(
                      movies[0],
                      movies
                    );
                  }, 2000);
                }                  
            });
        });
    }, 2000);
});

