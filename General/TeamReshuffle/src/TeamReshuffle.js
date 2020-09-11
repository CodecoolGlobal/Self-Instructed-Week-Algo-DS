var TeamReshuffle = /** @class */ (function () {
    function TeamReshuffle() {
        this.originalTeam = this.returnDataFromCsv();
        this.newTeam = this.returnDataFromCsv();
    }
    TeamReshuffle.prototype.returnDataFromCsv = function () {
        var fs = require('fs');
        var data = fs.readFileSync('dreamTeam.csv')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map(function (e) { return e.trim(); }) // remove white spaces for each line
            .map(function (e) { return e.split(',').map(function (e) { return e.trim(); }); }); // split each line to array
        return data;
    };
    TeamReshuffle.prototype.printOriginalTeam = function () {
        console.log(this.originalTeam);
    };
    TeamReshuffle.prototype.createReshuffledTeam = function () {
        var arrayLength = this.originalTeam[0].length;
        var i = 0;
        var j = 0;
        var counter = 0;
        while (counter < arrayLength) {
            this.newTeam[i][j] = this.originalTeam[j][i];
            i++;
            if (i === arrayLength) {
                i = 0;
                j++;
                counter++;
            }
        }
        console.log(this.newTeam);
    };
    return TeamReshuffle;
}());
var reshuffledTeam = new TeamReshuffle();
reshuffledTeam.printOriginalTeam();
reshuffledTeam.createReshuffledTeam();
//# sourceMappingURL=TeamReshuffle.js.map