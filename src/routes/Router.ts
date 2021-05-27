import Modules from "../helpers/Exporters.js";
import { Common } from "../enums/Common.enum.js";
import { IDomSelectedObjects } from "../interfaces/IDomSelectedObjects.js";

export default class Router {
  async onInitRoutes(routes?: any[]) {
    const {
      Home,
      Card,
      Table,
      Spinner,
      Observable,
      DomSelector,
      MovieService,
      EmployeeList,
      EmployeeService,
    } = new Modules();
    let domSelectedObject: IDomSelectedObjects = DomSelector.initDoms();
    if (routes !== undefined) {
    } else {
      setTimeout(async () => {
        const anchors: any[] = DomSelector.initDoms().topMenuAnchors;
        anchors.forEach(async (element) => {
          const htmlAnchorElement = element as HTMLAnchorElement;
          htmlAnchorElement.addEventListener("click", async (e) => {
            Observable.observable(domSelectedObject.renderBody!, {
              childList: true,
              oldValue: true,
            });
            const attrHref = htmlAnchorElement.getAttribute("component");
            let renderBody = domSelectedObject.renderBody!;

            if (attrHref === "employees") {
              Spinner.setSpinner(Common.LinearSpinner.toString());
              this.componentSetter(
                renderBody,
                EmployeeList.onInitEmployees(
                  await EmployeeService.getEmployees()
                ),
                1000
              );
            }

            if (attrHref === "home") {
              Spinner.setSpinner(Common.CircularSpinner.toString());
              this.componentSetter(renderBody, Home.homeComponet);
            }

            if (attrHref === "table") {
              Spinner.setSpinner(Common.LinearSpinner.toString());
              const movies = await MovieService.getMovies();
              this.componentSetter(renderBody, Table.makeTable(movies));
            }

            if (attrHref === "blogs") {
              const movies = await MovieService.getMovies();
              Spinner.setSpinner(Common.LinearSpinner.toString());
              this.componentSetter(
                renderBody,
                Card.cardForMovie(movies[0], movies)
              );
            }
          });
        });
      }, 2000);
    }
  }

  private componentSetter(renderBody: Element, component: any, time?: number) {
    setTimeout(
      () => {
        renderBody.innerHTML = component;
      },
      time ? time : 2000
    );
  }
}
