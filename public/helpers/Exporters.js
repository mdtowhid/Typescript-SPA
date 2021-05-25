import Card from "../components/card/Card.js";
import Chip from "../components/chip/Chip.js";
import Home from "../components/home/Home.js";
import Navbar from "../components/nav/Navbar.js";
import Spinner from "../components/spinner/Spinner.js";
import CardDetails from "../components/card/CardDetails.js";
import MovieService from "../services/MovieService.js";
import EmployeeService from "../services/EmployeeService.js";
import Observable from "../helpers/Observable.js";
import Table from "../components/table/Table.js";
import Router from "../routes/Router.js";
import DomSelector from "./DomSelector.js";
import EmployeeList from "../components/employee-list/EmployeeList.js";
var Exporters = /** @class */ (function () {
    function Exporters() {
        this.Card = Card;
        this.CardDetails = CardDetails;
        this.Chip = Chip;
        this.Home = Home;
        this.Navbar = Navbar;
        this.Spinner = new Spinner();
        this.Table = new Table();
        this.MovieService = new MovieService();
        this.EmployeeService = new EmployeeService();
        this.Observable = Observable;
        this.Router = new Router();
        this.DomSelector = new DomSelector();
        this.EmployeeList = new EmployeeList();
    }
    return Exporters;
}());
export default Exporters;
