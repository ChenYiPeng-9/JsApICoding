function Test1() {
  return { a: "1", b: "2" };
}

function Test2() {
  return "aaa";
}

console.log(new Test1(), "Test1", "原生");
console.log(new Test2(), "Test2", "原生");

Object.prototype;
function myNew(constructor) {
  if (typeof constructor !== "function") {
    console.error("Not Function");
    return;
  }
  let result = null;
  let newObj = null;

  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj);

  const flag = typeof result === "object" || typeof result === "function";

  return flag ? result : newObj;
}

console.log(myNew({}), "Test1", "手写");
console.log(myNew(Test2), "Test2", "手写");

console.log(Test1);
