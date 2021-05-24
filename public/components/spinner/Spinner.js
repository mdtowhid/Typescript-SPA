import { Common } from "../../enums/Common.enum.js";
var Spinner = /** @class */ (function () {
    function Spinner() {
    }
    Spinner.getSpinner = function (type) {
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
    Spinner.spinner = "<div class=\"valign-wrapper\">\n    <div class=\"progress\">\n      <div class=\"indeterminate\"></div>\n    </div>\n  </div>";
    return Spinner;
}());
export default Spinner;
