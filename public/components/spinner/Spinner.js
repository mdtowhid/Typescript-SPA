import { Common } from "../../enums/Common.enum.js";
import Modules from '../../helpers/Exporters.js';
var Spinner = /** @class */ (function () {
    function Spinner() {
        this.spinner = "<div class=\"valign-wrapper\">\n    <div class=\"progress\">\n      <div class=\"indeterminate\"></div>\n    </div>\n  </div>";
    }
    Spinner.prototype.setSpinner = function (type, target) {
        var DomSelector = new Modules().DomSelector;
        var spinner = this.makeSpinner(type);
        if (target !== undefined) {
            target.innerHTML = spinner;
        }
        else {
            var renderBody = DomSelector.initDoms().renderBody;
            renderBody.innerHTML = spinner;
        }
    };
    Spinner.prototype.makeSpinner = function (type) {
        var sp = "";
        switch (type) {
            case Common.LinearSpinner.toString():
                sp = "<div class=\"valign-wrapper\" style=\"margin-top: 50px\">\n            <div class=\"progress\">\n            <div class=\"indeterminate\"></div>\n            </div>\n        </div>";
                break;
            case Common.CircularSpinner.toString():
                sp = "<div class=\"preloader-wrapper big active\" style=\"margin-top: 150px\">\n            <div class=\"spinner-layer spinner-blue-only\">\n            <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n            </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n            </div>\n            </div>\n        </div>";
            default:
                break;
        }
        return sp;
    };
    return Spinner;
}());
export default Spinner;
