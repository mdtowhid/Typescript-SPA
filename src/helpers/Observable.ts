import CardDetails from "../components/card/CardDetails.js";
import Spinner from "../components/spinner/Spinner.js";
import MovieService from "../services/MovieService.js";
import DomSelector from "./DomSelector.js";


export default class Observable {
  static observable(target: Element, options: object) {
    const movieService = new MovieService();

    const observer: MutationObserver = new MutationObserver(
      (mutations: MutationRecord[]) => {
        for (let mutation of mutations) {
          if (mutation.type === "childList") {
            if (mutation.addedNodes instanceof NodeList) {
                mutation.addedNodes.forEach((element) => {                    
                    const a = document.querySelectorAll('a');
                    a.forEach(element => {
                        let aas = element as HTMLAnchorElement;
                        if (aas.hasAttribute("details-component")) {
                            aas.addEventListener('click', async e=>{
                                let attrDetailsComponent = aas.getAttribute("details-component");
                                let attrSplitted=attrDetailsComponent?.split('/');
                                let renderBody = DomSelector.initDoms().renderBody;
                                renderBody!.innerHTML = Spinner.spinner;
                                setTimeout(async () => {
                                    if (attrSplitted?.length) {
                                      if (attrSplitted[0] === "card-details") {
                                        const movie = await movieService.getMovie(+attrSplitted[1]);
                                        renderBody!.innerHTML =
                                          CardDetails.getCardDetails(movie);
                                        setTimeout(() => {}, 2000);
                                      }
                                    }
                                }, 2000);
                            })                              
                        }
                    });
                });
                
            }
          }
        }
      }
    );

    observer.observe(target, options)
  }
}
