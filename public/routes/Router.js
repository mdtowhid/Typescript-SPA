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
import Modules from "../helpers/Exporters.js";
import { Common } from "../enums/Common.enum.js";
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.onInitRoutes = function (routes) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Home, Card, Table, Spinner, Observable, DomSelector, MovieService, EmployeeList, EmployeeService, domSelectedObject;
            var _this = this;
            return __generator(this, function (_b) {
                _a = new Modules(), Home = _a.Home, Card = _a.Card, Table = _a.Table, Spinner = _a.Spinner, Observable = _a.Observable, DomSelector = _a.DomSelector, MovieService = _a.MovieService, EmployeeList = _a.EmployeeList, EmployeeService = _a.EmployeeService;
                domSelectedObject = DomSelector.initDoms();
                if (routes !== undefined) {
                }
                else {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var anchors;
                        var _this = this;
                        return __generator(this, function (_a) {
                            anchors = DomSelector.initDoms().topMenuAnchors;
                            anchors.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var htmlAnchorElement;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    htmlAnchorElement = element;
                                    htmlAnchorElement.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                                        var attrHref, renderBody, _a, _b, _c, _d, movies, movies;
                                        return __generator(this, function (_e) {
                                            switch (_e.label) {
                                                case 0:
                                                    Observable.observable(domSelectedObject.renderBody, {
                                                        childList: true,
                                                        oldValue: true,
                                                    });
                                                    attrHref = htmlAnchorElement.getAttribute("component");
                                                    renderBody = domSelectedObject.renderBody;
                                                    if (!(attrHref === "employees")) return [3 /*break*/, 2];
                                                    Spinner.setSpinner(Common.LinearSpinner.toString());
                                                    _a = this.componentSetter;
                                                    _b = [renderBody];
                                                    _d = (_c = EmployeeList).onInitEmployees;
                                                    return [4 /*yield*/, EmployeeService.getEmployees()];
                                                case 1:
                                                    _a.apply(this, _b.concat([_d.apply(_c, [_e.sent()]),
                                                        1000]));
                                                    _e.label = 2;
                                                case 2:
                                                    if (attrHref === "home") {
                                                        Spinner.setSpinner(Common.CircularSpinner.toString());
                                                        this.componentSetter(renderBody, Home.homeComponet);
                                                    }
                                                    if (!(attrHref === "table")) return [3 /*break*/, 4];
                                                    Spinner.setSpinner(Common.LinearSpinner.toString());
                                                    return [4 /*yield*/, MovieService.getMovies()];
                                                case 3:
                                                    movies = _e.sent();
                                                    this.componentSetter(renderBody, Table.makeTable(movies));
                                                    _e.label = 4;
                                                case 4:
                                                    if (!(attrHref === "blogs")) return [3 /*break*/, 6];
                                                    return [4 /*yield*/, MovieService.getMovies()];
                                                case 5:
                                                    movies = _e.sent();
                                                    Spinner.setSpinner(Common.LinearSpinner.toString());
                                                    this.componentSetter(renderBody, Card.cardForMovie(movies[0], movies));
                                                    _e.label = 6;
                                                case 6: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); }, 2000);
                }
                return [2 /*return*/];
            });
        });
    };
    Router.prototype.componentSetter = function (renderBody, component, time) {
        setTimeout(function () {
            renderBody.innerHTML = component;
        }, time ? time : 2000);
    };
    return Router;
}());
export default Router;
