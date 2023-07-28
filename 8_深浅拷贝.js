// 浅克隆
const obj = {
  a: 100,
  b: 200,
  c: 300,
  d: [1, 2, 3, 4],
};

// const qianClone = { ...obj };
const qianClone = Object.assign({}, obj);
console.log(obj, "原有数据");
console.log(qianClone, "浅克隆的数据");
qianClone.d[1] = 500;
console.log(obj, "原有数据");
console.log(qianClone, "浅克隆的数据");

console.log("=============");

// 深克隆：序列化+反序列化
const xlhObj = {
  a: 100,
  b: 200,
  c: 300,
  d: [1, 2, 3, 4],
};
function xlhDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const deepClone = xlhDeepClone(xlhObj);
console.log(xlhObj, "原有数据");
console.log(deepClone, "深克隆的数据");
deepClone.d[1] = 500;
console.log(xlhObj, "原有数据");
console.log(deepClone, "深克隆的数据");

console.log("============");

// 深克隆：递归
const dgObj = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10,
  },
  d: /^\d+$/,
};

const dgDeepClone = (obj) => {
  if (obj === null) return null;

  if (typeof obj !== "object") return obj;

  if (typeof obj === "function") return new Function(obj);

  if (obj instanceof RegExp) return new RegExp(obj);

  if (obj instanceof Date) return new Date(obj);

  const res = new obj.constructor();
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      res[item] = dgDeepClone(obj[item]);
    }
  }
  return res;
};

console.log(dgDeepClone(dgObj), "oo");
