var multi = function (n, m) { return n * m; };
console.log(multi(2, 4)); //8
var curriedMulti = function (n) {
    return function (m) { return n * m; };
};
console.log(curriedMulti(2)(4)); //8
var simpleCurriedMulti = function (n) { return function (m) { return n * m; }; };
console.log(simpleCurriedMulti(2)(4));
var triple = simpleCurriedMulti(3);
console.log(triple(5));
