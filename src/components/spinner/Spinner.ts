import { Common } from "../../enums/Common.enum.js";

export default class Spinner {
  static spinner = `<div class="valign-wrapper">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>`;

  static getSpinner(type: string): string {
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
