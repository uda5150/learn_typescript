var hof = function (ex, fn) {
    return function (n) { return fn(n + ex); };
};
var plusOneDouble = hof(1, function (n) { return n * 2; });
console.log(plusOneDouble(4));
