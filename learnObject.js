var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var arr1 = ['A', 'B', 'C'];
var arr2 = arr1.concat(['D', 'E']);
console.log(arr2);
var obj1 = { a: 1, b: 2, c: 3 };
var obj2 = __assign({}, obj1, { d: 4, e: 5 });
console.log(obj2);
var foo = 65536;
var obj = { foo: foo, bar: 4096 };
console.log(obj);
