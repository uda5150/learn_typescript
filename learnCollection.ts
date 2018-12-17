const arr = [1,2,3,4,5,6,7,8];

console.log(arr.map(n => n * 2));

console.log(arr.filter(n => n % 3 === 0));

// 条件に適合した要素をひとつだけ取り出す
console.log(arr.find(n => n > 4));

// 全ての要素が条件を満たすかを真偽値で返す
console.log(arr.every(n => n !== 0));

// 条件を満たすか要素がひとつでもあるかを真偽値で返す
console.log(arr.some(n => n > 8));

// 指定した要素が含まれるかを真偽値で返す
console.log(arr.includes(5));

// 配列の要素を与えた式で畳み込んだ値を返す
console.log(arr.reduce((n, m) => n + m));

console.log(arr.sort((n, m) => n < m));