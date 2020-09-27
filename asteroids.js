var asteroides = [5, 10, -8];
let maximum = Math.max(...asteroides);
let minimum = Math.min(...asteroides);
console.log(minimum);
console.log(maximum);
let result = maximum + minimum;
var filtered = [];

function asteroids(asteroides) {

    console.log(result);

    for (var i = 0; i < asteroides.length; i++) {
        if (result > 0) {
            filtered = asteroides.filter(function (value) {
                return value > minimum;
            });
        }
        if (result < 0) {
            filtered = asteroides.filter(function (value) {
                return value > maximum;
            });
        }
        if (result = 0) {
            return filtered
        }
    }
    return filtered;
}



console.log(asteroids(asteroides));