import Modules from "../helpers/Exporters.js";
export default class Observable {
  static observable(target: Element, options: object) {
    const { DomSelector, Spinner, CardDetails, MovieService } = new Modules();

    const observer: MutationObserver = new MutationObserver(
      (mutations: MutationRecord[]) => {
        for (let mutation of mutations) {
          if (mutation.type === "childList") {
            if (mutation.addedNodes instanceof NodeList) {
              mutation.addedNodes.forEach((element) => {
                const a = document.querySelectorAll("a");
                a.forEach((element) => {
                  let aas = element as HTMLAnchorElement;
                  if (aas.hasAttribute("details-component")) {
                    aas.addEventListener("click", async (e) => {
                      let attrDetailsComponent =
                        aas.getAttribute("details-component");
                      let attrSplitted = attrDetailsComponent?.split("/");
                      let renderBody = DomSelector.initDoms().renderBody;
                      renderBody!.innerHTML = Spinner.spinner;
                      setTimeout(async () => {
                        if (attrSplitted?.length) {
                          if (attrSplitted[0] === "card-details") {
                            const movie = await MovieService.getMovie(
                              +attrSplitted[1]
                            );
                            renderBody!.innerHTML =
                              CardDetails.getCardDetails(movie);
                          }
                        }
                      }, 2000);
                    });
                  }
                });
              });
            }
          }
        }
      }
    );

    observer.observe(target, options);
  }
}
