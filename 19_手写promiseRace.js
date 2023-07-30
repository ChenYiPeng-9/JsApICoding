let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000);
});

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value, "原生");
});

Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value, "手写");
});
