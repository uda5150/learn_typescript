// 従来の関数宣言
function plusOne(n) {
    return n + 1;
};

// アロー関数宣言1
const plusOneAllow1 = (n) => { return n + 1; };

// アロー関数宣言2
// 因数が一つの場合は、()を省略できる
// 本文がreturn文だけのときはreturnも省略できる
const plusOneAllow2 = n => n + 1;
