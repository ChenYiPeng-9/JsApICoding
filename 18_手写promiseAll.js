let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000);
});

Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const promiseResult = [];
    let count = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          count++;
          promiseResult.push(value);
          if (count === promiseArr.length) {
            resolve(promiseResult);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.myAll([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
