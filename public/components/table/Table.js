var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.makeGenericTable = function (data) {
        data.forEach(function (d) {
            d.models.id = 10;
        });
    };
    Table.prototype.makeTable = function (models) {
        return "<table>\n        <thead>\n          <tr>\n              <th>Name</th>\n              <th>Item Name</th>\n              <th>Item Price</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td>Alvin</td>\n            <td>Eclair</td>\n            <td>$0.87</td>\n          </tr>\n          <tr>\n            <td>Alan</td>\n            <td>Jellybean</td>\n            <td>$3.76</td>\n          </tr>\n          <tr>\n            <td>Jonathan</td>\n            <td>Lollipop</td>\n            <td>$7.00</td>\n          </tr>\n        </tbody>\n      </table>\n            ";
    };
    return Table;
}());
export default Table;
