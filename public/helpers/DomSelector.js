var DomSelector = /** @class */ (function () {
    function DomSelector() {
        this.x = document.querySelectorAll(".top-menu-items-ul li a");
    }
    DomSelector.prototype.initDoms = function () {
        var domSelectedObject = {
            topMenuAnchors: document.querySelectorAll(".top-menu-items-ul li a"),
            navbar: document.getElementById("nav"),
            renderBody: document.getElementById("render-body"),
        };
        return domSelectedObject;
    };
    return DomSelector;
}());
export default DomSelector;
