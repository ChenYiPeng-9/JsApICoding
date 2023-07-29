const applyObj = {
  a: 100,
  b: 200,
};

function applyFn() {
  console.log([...arguments], "applyArgument");
  return (
    this.a +
    this.b +
    [...arguments].reduce((pre, cur) => {
      return pre + cur;
    }, 0)
  );
}

console.log(applyFn.apply(applyObj, [1, 2, 3, 4]));

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    console.error("Not function");
    return;
  }

  context = context || globalThis;

  context.fn = this;

  let result;

  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;

  return result;
};

console.log(applyFn.myApply(applyObj, [1, 2, 3, 4]));
