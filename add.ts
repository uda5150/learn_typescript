// 10進数を2進数に変換
const decimalToBinary = (n: number) => {
  let binaryN = [];

  while (n > 0) {
    binaryN.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return Number(binaryN.join(''));
}

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
      tmpResultList.unshift(1);
    } else {
      if (tmpResultList[i] >= 2) {
        tmpResultList[i - 1] =+ 1;
        tmpResultList[i] = tmpResultList[i] % 2;
      };
    };
  };

  return Number(tmpResultList.join(''));
}

// 10進数の足し算
const addDecimal = (n: number, m: number) => {
  const resultBinary = addBinary(decimalToBinary(n), decimalToBinary(m));
  
  return binaryToDecimal(resultBinary);
}

console.log(addDecimal(12, 12));