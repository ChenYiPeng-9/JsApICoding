// 手写instanceof方法
const arr = [1, 2, 4];
console.log(arr instanceof Array);

const myInstance = (obj, Obj) => {
  const prototypeObj = Obj.prototype;
  const prototype = Object.getPrototypeOf(obj);

  while (prototype) {
    if (prototype === prototypeObj) {
      return true;
    }
    prototype = Obj.getPrototypeOf(prototype);
  }

  return false;
};

console.log(myInstance([1, 2, 3], Array));

console.log("==============");

// 手写indexOf方法
const indexArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(indexArr.indexOf(3));

const MyIndex = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myIndex = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};

console.log(MyIndex(indexArr, 3));
console.log(indexArr.myIndex(3));

console.log("==============");
// 判断对象类型
function getObjType(obj) {
  if (obj === null) {
    return null;
  }

  if (typeof obj === "object") {
    let objInfo = Object.prototype.toString.call(obj).split(" ")[1].split("");
    objInfo.pop();
    return objInfo.join("").toLowerCase();
    // return objInfo.join("");
  } else {
    return typeof obj;
  }
}

console.log(getObjType([1, 2]));
