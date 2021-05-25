import { Common } from "../enums/Common.enum.js";
import Modules from "../helpers/Exporters.js";
import { IDomSelectedObjects } from "../interfaces/IDomSelectedObjects.js";

export default class Router {
  async onInitRoutes(routes?: any[]) {
    const { Observable, Spinner, Home, Card, Table, Navbar, MovieService, DomSelector } =
      new Modules();
    let domSelectedObject: IDomSelectedObjects = DomSelector.initDoms();
    const movies = await MovieService.getMovies();
    if(routes !== undefined){
        
    }else{
        setTimeout(() => {
          const anchors: any[] = DomSelector.initDoms().topMenuAnchors;
          anchors.forEach((element) => {
            const htmlAnchorElement = element as HTMLAnchorElement;
            htmlAnchorElement.addEventListener("click", (e) => {
              Observable.observable(domSelectedObject.renderBody!, {
                childList: true,
                oldValue: true,
              });
              const attrHref = htmlAnchorElement.getAttribute("component");

              if (attrHref === "home") {
                Spinner.setSpinner(Common.LinearSpinner.toString());
                setTimeout(() => {
                  domSelectedObject.renderBody!.innerHTML = Home.homeComponet;
                }, 1000);
              }

              if (attrHref === "table") {
                Spinner.setSpinner(Common.LinearSpinner.toString());
                setTimeout(() => {
                  domSelectedObject.renderBody!.innerHTML =
                    Table.makeTable(movies);
                }, 1000);
              }

              if (attrHref === "navbar")
                domSelectedObject.renderBody!.innerHTML = Navbar.navbar;

              if (attrHref === "blogs") {
                Spinner.setSpinner(Common.LinearSpinner.toString());
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
    }
  }
}
