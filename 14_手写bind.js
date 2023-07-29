const bindObj = {
  a: 100,
  b: 200,
};

function bindFn(arr) {
  return (
    this.a +
    this.b +
    [...arguments].reduce((pre, cur) => {
      return pre + cur;
    }, 0)
  );
}

const test = bindFn.bind(bindObj, 1, 2, 3, 4);
console.log(test(), "原生一般函数");
console.log(new test(), "原生构造函数");

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    console.error("Not Function");
    return;
  }

  context = context || globalThis;

  const fn = this;

  const args = [...arguments].slice(1);

  return function MyBind() {
    return fn.apply(
      this instanceof MyBind ? this : context,
      args.concat([...arguments])
    );
  };
};

const myTest = bindFn.myBind(bindObj, 1, 2, 3, 4);
console.log(myTest(), "手写一般函数");
console.log(new myTest(), "手写构造函数");
