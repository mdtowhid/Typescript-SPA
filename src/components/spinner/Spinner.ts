import { Common } from "../../enums/Common.enum.js";
import Modules from '../../helpers/Exporters.js';

export default class Spinner {
  spinner = `<div class="valign-wrapper">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>`;

  setSpinner(type: string, target?: Element) {
    const { DomSelector } = new Modules();
    const spinner = this.makeSpinner(type);

    if(target !== undefined){
      target.innerHTML = spinner;
    }else{
      let renderBody = DomSelector.initDoms().renderBody;
      renderBody!.innerHTML = spinner;
    }
    
  }

  makeSpinner(type: string): string {
    let sp = ``;
    switch (type) {
      case Common.LinearSpinner.toString():
        sp = `<div class="valign-wrapper" style="margin-top: 50px">
            <div class="progress">
            <div class="indeterminate"></div>
            </div>
        </div>`;
        break;
      case Common.CircularSpinner.toString():
        sp = `<div class="preloader-wrapper big active" style="margin-top: 150px">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>`;
      default:
        break;
    }

    return sp;
  }
}
