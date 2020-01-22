//Given a number, return true if the input is a factorial of any natural number.
var n = 6;
var _array = [];
if (n > 362880) {
    for (var i = 1; i <= n / 10000; i++) {
        _array.push(i);

    };
} else {
    for (var i = 1; i <= n / 2; i++) {
        _array.push(i);

    };
}

function multiply() {
    var pro = 1;
    for (var j = 0; j < _array.length + 1; j++) {
        var elem = _array[j];

        pro = pro * elem;
        if (pro == n) {
            return true;
        }
    }
    return (!(pro !== n))
};
console.log(multiply());