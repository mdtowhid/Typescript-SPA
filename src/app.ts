import { IDomSelectedObjects } from "./interfaces/IDomSelectedObjects.js";
import Modules from "./helpers/Exporters.js";

window.addEventListener("DOMContentLoaded", async (e) => {
  const { Navbar, Home, Router, DomSelector } = new Modules();
  let domSelectedObject: IDomSelectedObjects = DomSelector.initDoms();
  domSelectedObject.navbar!.innerHTML = Navbar.navbar;
  domSelectedObject.renderBody!.innerHTML = Home.homeComponet;
  Router.onInitRoutes();
});
