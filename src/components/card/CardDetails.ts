import IMovie from "../../interfaces/IMovie.js";

export default class CardDetails {
    static getCardDetails(movie: IMovie):string{
        return `<div class="col s12 m12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">${movie.title}</span>
                        <p>${movie.url} I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>`;
    }
}
