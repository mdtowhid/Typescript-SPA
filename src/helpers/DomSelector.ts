import { IDomSelectedObjects } from "../interfaces/IDomSelectedObjects";

export default class DomSelector {
  static x = document.querySelectorAll(".top-menu-items-ul li a")!;

  static initDoms(): IDomSelectedObjects {
    let domSelectedObject: IDomSelectedObjects = {
      topMenuAnchors: document.querySelectorAll(".top-menu-items-ul li a")!,
      navbar: document.getElementById("nav")!,
      renderBody: document.getElementById("render-body")!,
    };

    return domSelectedObject;
  }
}
