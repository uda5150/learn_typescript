// 10進数を2進数に変換
const decimalToBinary = (n: number) => {
  let binaryN = [];

  while (n > 0) {
    binaryN.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return Number(binaryN.join(''));
}

// console.log("decimalToBinary(0) =", decimalToBinary(0));
// console.log("decimalToBinary(1) =", decimalToBinary(1));
// console.log("decimalToBinary(2) =", decimalToBinary(2));
// console.log("decimalToBinary(40) =", decimalToBinary(40));
// console.log("decimalToBinary(100) =", decimalToBinary(100));

// 2進数を10進数に変換
const binaryToDecimal = (n: number) => {
  const digits = n.toString().length;
  let decimalN = 0;

  for (let i = digits - 1; i >= 0; i--) {
    let digitN = Math.floor(n / (10 ** i));
    decimalN += digitN * (2 ** i);
    n = Math.floor(n % (10 ** i));
  }
  
  return decimalN;
}

// console.log("binaryToDecimal(0) =", binaryToDecimal(0));
// console.log("binaryToDecimal(1) =", binaryToDecimal(1));
// console.log("binaryToDecimal(10) =", binaryToDecimal(10));
// console.log("binaryToDecimal(101000) =", binaryToDecimal(101000));
// console.log("binaryToDecimal(1100100) =", binaryToDecimal(1100100));

// 2進数の足し算
const addBinary = (n: number, m: number) => {
  let tmpResult = n + m;
  const digits = tmpResult.toString().length;
  let tmpResultList = [];

  for (let i = digits - 1; i >= 0; i--) {
    let digitN = Math.floor(tmpResult / (10 ** i));
    tmpResultList.push(digitN);
    tmpResult = Math.floor(tmpResult % (10 ** i));
  };

  for (let i = digits - 1; i >= 0; i--) {
    if (i === 0){
      if (tmpResultList[i] >= 2) {
        tmpResultList[i] = tmpResultList[i] % 2;
        tmpResultList.unshift(1);
      }
    } else {
      if (tmpResultList[i] >= 2) {
        tmpResultList[i - 1] += 1;
        tmpResultList[i] = tmpResultList[i] % 2;
      };
    };
  };

  return Number(tmpResultList.join(''));
}

// console.log("addBinary(0, 0) =", addBinary(0, 0));
// console.log("addBinary(0, 1) =", addBinary(0, 1));
// console.log("addBinary(1, 0) =", addBinary(1, 0));
// console.log("addBinary(1, 1) =", addBinary(1, 1));
// console.log("addBinary(10101, 10011) =", addBinary(10101, 10011));
// console.log("addBinary(11011010, 10110110) =", addBinary(11011010, 10110110));

// 10進数の足し算
const addDecimal = (n: number, m: number) => {
  const resultBinary = addBinary(decimalToBinary(n), decimalToBinary(m));

  return binaryToDecimal(resultBinary);
}


console.log("0 + 0 =", addDecimal(0, 0));
console.log("0 + 1 =", addDecimal(0, 1));
console.log("1 + 1 =", addDecimal(1, 1));
console.log("12 + 12 =", addDecimal(12, 12));
console.log("21 + 19 =", addDecimal(21, 19));
console.log("299 + 1 =", addDecimal(299, 1));
console.log("7 + 7 =", addDecimal(7, 7));
console.log("218 + 182 =", addDecimal(218, 182)); //11011010 10110110