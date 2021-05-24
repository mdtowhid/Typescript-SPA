var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Card from "./components/card/Card.js";
import Home from "./components/home/Home.js";
import Navbar from "./components/nav/Navbar.js";
import Spinner from "./components/spinner/Spinner.js";
import Table from "./components/table/Table.js";
import { Common } from "./enums/Common.enum.js";
import DomSelector from "./helpers/DomSelector.js";
import Observable from "./helpers/Observable.js";
import EmployeeService from "./services/EmployeeService.js";
import MovieService from "./services/MovieService.js";
window.addEventListener('DOMContentLoaded', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var topMenuAnhcors, movieService, movies, employeeService, employees, employee, domSelectedObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                topMenuAnhcors = null;
                movieService = new MovieService();
                return [4 /*yield*/, movieService.getMovies()];
            case 1:
                movies = _a.sent();
                employeeService = new EmployeeService();
                return [4 /*yield*/, employeeService.getEmployees()];
            case 2:
                employees = _a.sent();
                return [4 /*yield*/, employeeService.getEmployeeById(1)];
            case 3:
                employee = _a.sent();
                domSelectedObject = DomSelector.initDoms();
                domSelectedObject.navbar.innerHTML = Navbar.navbar;
                domSelectedObject.renderBody.innerHTML = Home.homeComponet;
                setTimeout(function () {
                    var anchors = DomSelector.initDoms().topMenuAnchors;
                    anchors.forEach(function (element) {
                        var htmlAnchorElement = element;
                        htmlAnchorElement.addEventListener('click', function (e) {
                            Observable.observable(domSelectedObject.renderBody, {
                                childList: true,
                                oldValue: true,
                            });
                            var attrHref = htmlAnchorElement.getAttribute("component");
                            if (attrHref === "table")
                                domSelectedObject.renderBody.innerHTML = Table.makeTable(movies);
                            if (attrHref === "navbar")
                                domSelectedObject.renderBody.innerHTML = Navbar.navbar;
                            if (attrHref === "blogs") {
                                domSelectedObject.renderBody.innerHTML = Spinner.getSpinner(Common.LinearSpinner.toString());
                                setTimeout(function () {
                                    domSelectedObject.renderBody.innerHTML = Card.cardForMovie(movies[0], movies);
                                }, 2000);
                            }
                        });
                    });
                }, 2000);
                return [2 /*return*/];
        }
    });
}); });
