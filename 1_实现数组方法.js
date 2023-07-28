// 手写reduce方法

const reduce_array = [1, 2, 3, 4, 5];
console.log(
  reduce_array.reduce((pre, cur) => {
    return pre + cur;
  }, 2),
  "原生reduce"
);

const myReduce_array = [1, 2, 3, 4, 5];
Array.prototype.myReduce = function (fn, value = 0) {
  for (let i = 0; i < this.length; i++) {
    value = fn(value, this[i]);
  }
  return value;
};
console.log(
  myReduce_array.myReduce((pre, cur) => {
    return pre + cur;
  }, 2),
  "手写reduce"
);

console.log("=====================================");

// 手写forEach方法
const forEach_array = [1, 2, 3, 4, 5];
forEach_array.forEach((item, index, array) => {
  console.log(item, index, array, "原生forEach");
});

const myForEach_array = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (fn) {
  this.reduce((pre, cur, index, array) => {
    fn(cur, index, array);
  }, 0);
};
forEach_array.myForEach((item, index, array) => {
  console.log(item, index, array, "手写forEach");
});

console.log("=====================================");

// 手写map方法
const map_array = [1, 2, 3, 4, 5];
const mapResult = map_array.map((item, index, array) => {
  return item + index;
});

console.log(mapResult, "原生map");

const myMap_array = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (fn) {
  const result = [];
  this.reduce((pre, cur, index, array) => {
    result.push(fn(cur, index, array));
  }, 0);
  return result;
};
const myMapResult = myMap_array.myMap((item, index, array) => {
  return item + index;
});

console.log(myMapResult, "手写map");

console.log("=====================================");

// 手写map方法
const filter_array = [1, 2, 3, 4, 5];
const filterResult = filter_array.filter((item, index, array) => {
  return index >= 2 && item < 5;
});

console.log(filterResult, "原生filter");

const myFilter_array = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (fn) {
  const result = [];
  this.reduce((pre, cur, index, array) => {
    if (fn(cur, index, array)) {
      result.push(cur);
    }
  }, 0);
  return result;
};
const myFilterResult = myFilter_array.myFilter((item, index, array) => {
  return index >= 2 && item < 5;
});

console.log(myFilterResult, "手写filter");
