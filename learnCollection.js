var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.map(function (n) { return n * 2; }));
console.log(arr.filter(function (n) { return n % 3 === 0; }));
// 条件に適合した要素をひとつだけ取り出す
console.log(arr.find(function (n) { return n > 4; }));
// 全ての要素が条件を満たすかを真偽値で返す
console.log(arr.every(function (n) { return n !== 0; }));
// 条件を満たすか要素がひとつでもあるかを真偽値で返す
console.log(arr.some(function (n) { return n > 8; }));
// 指定した要素が含まれるかを真偽値で返す
console.log(arr.includes(5));
// 配列の要素を与えた式で畳み込んだ値を返す
console.log(arr.reduce(function (n, m) { return n + m; }));
console.log(arr.sort(function (n, m) { return n < m; }));
