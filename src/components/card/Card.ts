import IMovie from "../../interfaces/IMovie";

export default class Card {
  static cardForMovie(movie: IMovie, movies?: IMovie[]){
      let temp = ``;
      if(movies !== undefined){
          movies.forEach(m=>{
            temp += `
              <div class="col s6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">${m.title}</span>
                    <p>${m.url} I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <a href="#" class="card-details" details-component="card-details/${m.id}">Details</a>
                    <a href="#">This is a link</a>
                    </div>
                </div>
              </div>
            `;
          });
        return temp;
      }
      return `<div class="row">
            <div class="col s12 m6">
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
            </div>
        </div>`;
  }
}
