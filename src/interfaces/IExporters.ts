import Card from "../components/card/Card.js";
import CardDetails from "../components/card/CardDetails.js";
import Chip from "../components/chip/Chip.js";
import Home from "../components/home/Home.js";
import Navbar from "../components/nav/Navbar.js";
import Spinner from "../components/spinner/Spinner.js";
import Table from "../components/table/Table.js";
import DomSelector from "../helpers/DomSelector.js";
import Observable from "../helpers/Observable.js";
import Router from "../routes/Router.js";
import EmployeeService from "../services/EmployeeService.js";
import MovieService from "../services/MovieService.js";

export default interface IExporters {
  Card?: Card;
  CardDetails?: CardDetails;
  Navbar?: Navbar;
  Chip?: Chip;
  Home?: Home;
  Spinner?: Spinner;
  MovieService?: MovieService;
  EmployeeService?: EmployeeService;
  Observable?: Observable;
  Table?: Table<any>;
  Router?: Router;
  DomSelector?: DomSelector;
}
