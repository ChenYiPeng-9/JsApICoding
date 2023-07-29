function callFn() {
  console.log([...arguments]);
  return this.a + this.b - [...arguments];
}

const callObj = {
  a: "123",
  b: "468",
};

console.log(callFn.call(callObj, 1), "原生");

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error("Not Function");
    return;
  }

  context = context || globalThis;

  const args = [...arguments].slice(1);

  context.fn = this;

  const result = context.fn(...args);

  delete context.fn;

  return result;
};

console.log(callFn.myCall(callObj, 1), "手写");
