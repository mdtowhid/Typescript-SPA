import Card from "../components/card/Card.js";
import Chip from "../components/chip/Chip.js";
import Home from "../components/home/Home.js";
import Navbar from "../components/nav/Navbar.js";
import Spinner from "../components/spinner/Spinner.js";
import CardDetails from "../components/card/CardDetails.js";
import IExporters from "../interfaces/IExporters.js";
import MovieService from "../services/MovieService.js";
import EmployeeService from "../services/EmployeeService.js";
import Observable from "../helpers/Observable.js";
import Table from "../components/table/Table.js";
import Router from "../routes/Router.js";
import DomSelector from "./DomSelector.js";

export default class Exporters implements IExporters {
  Card = Card;
  CardDetails = CardDetails;
  Chip = Chip;
  Home = Home;
  Navbar = Navbar;
  Spinner = new Spinner();
  Table = new Table();
  MovieService = new MovieService();
  EmployeeService = new EmployeeService();
  Observable = Observable;
  Router = new Router();
  DomSelector = new DomSelector();
}
