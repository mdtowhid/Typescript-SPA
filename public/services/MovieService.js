import Axios from "../classes/Axios.js";
var MovieService = /** @class */ (function () {
    function MovieService() {
        var _this = this;
        this._url = "../movies.json";
        this.getMovies = function () { return _this._axios.GetAll(_this._url); };
        this.getMovie = function (id) { return _this._axios.GetById(id, _this._url); };
        this._axios = new Axios();
    }
    return MovieService;
}());
export default MovieService;
