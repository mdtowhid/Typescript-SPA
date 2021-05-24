import Axios from "../classes/Axios.js";
import IMovie from "../interfaces/IMovie.js";

export default class MovieService {
  private _axios: Axios<IMovie>;
  private _url = "../movies.json";
  constructor() {
    this._axios = new Axios<IMovie>();
  }

  getMovies = () => this._axios.GetAll(this._url);

  getMovie = (id: string | number) => this._axios.GetById(id, this._url);
}
