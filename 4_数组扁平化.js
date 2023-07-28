//  flat方法
const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];

console.log(arr.flat(Infinity), "flat");

//字符串
arr.toString;
function flatStr(arr) {
  const strArr = arr.toString().split(",");
  return strArr.map((item) => {
    return parseInt(item);
  });
}

console.log(flatStr(arr), "字符串");
[].concat;

// 递归
function myFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  }, []);
}

console.log(myFlat(arr), "递归");
