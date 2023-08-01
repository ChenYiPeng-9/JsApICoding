// 柯里化一般形式

function curry(fn, ...args1) {
  const argsResult = [...args1];

  return function (...args2) {
    argsResult.push(...args2);
    if (argsResult.length >= fn.length) {
      return fn(...argsResult);
    } else {
      return curry(fn, ...argsResult);
    }
  };
}

const curryTest = (a, b, c) => {
  return a + b + c;
};

console.log(curryTest(1, 2, 3, 4, 5), "柯里化一般形式1");

console.log(curry(curryTest, 1)(3)(2), "柯里化一般形式2");

// 柯里化实现累加

function curryAdd(...outArgs) {
  const argsArr = [...outArgs];
  let s = function (...inArgs) {
    argsArr.push(...inArgs);
    return s;
  };

  s.getSum = function () {
    return argsArr.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  };

  return s;
}

console.log(curryAdd(1, 2, 3)(4, 5)(6).getSum(), "柯里化叠加");
