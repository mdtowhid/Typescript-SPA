var DomSelector = /** @class */ (function () {
    function DomSelector() {
    }
    DomSelector.initDoms = function () {
        var domSelectedObject = {
            topMenuAnchors: document.querySelectorAll(".top-menu-items-ul li a"),
            navbar: document.getElementById("nav"),
            renderBody: document.getElementById("render-body"),
        };
        return domSelectedObject;
    };
    DomSelector.x = document.querySelectorAll(".top-menu-items-ul li a");
    return DomSelector;
}());
export default DomSelector;
