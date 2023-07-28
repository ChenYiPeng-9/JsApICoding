// set 结构去重
const array = [1, 2, 2, 3, 2, 4, 5, 5, 7, 8, 9, 6, 6, 7];
console.log([...new Set(array)], "set");

// 遍历去重
function remove(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(remove(array), "遍历");
