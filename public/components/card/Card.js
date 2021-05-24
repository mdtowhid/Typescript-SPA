var Card = /** @class */ (function () {
    function Card() {
    }
    Card.cardForMovie = function (movie, movies) {
        var temp = "";
        if (movies !== undefined) {
            movies.forEach(function (m) {
                temp += "\n              <div class=\"col s6\">\n                <div class=\"card blue-grey darken-1\">\n                    <div class=\"card-content white-text\">\n                    <span class=\"card-title\">" + m.title + "</span>\n                    <p>" + m.url + " I am a very simple card. I am good at containing small bits of information.\n                      I am convenient because I require little markup to use effectively.</p>\n                    </div>\n                    <div class=\"card-action\">\n                    <a href=\"#\" class=\"card-details\" details-component=\"card-details/" + m.id + "\">Details</a>\n                    <a href=\"#\">This is a link</a>\n                    </div>\n                </div>\n              </div>\n            ";
            });
            return temp;
        }
        return "<div class=\"row\">\n            <div class=\"col s12 m6\">\n            <div class=\"card blue-grey darken-1\">\n                <div class=\"card-content white-text\">\n                <span class=\"card-title\">" + movie.title + "</span>\n                <p>" + movie.url + " I am a very simple card. I am good at containing small bits of information.\n                I am convenient because I require little markup to use effectively.</p>\n                </div>\n                <div class=\"card-action\">\n                <a href=\"#\">This is a link</a>\n                <a href=\"#\">This is a link</a>\n                </div>\n            </div>\n            </div>\n        </div>";
    };
    return Card;
}());
export default Card;
