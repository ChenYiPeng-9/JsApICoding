// JavaScript实现一个带并发限制的异步调度器，保证同时最多运行2个任务

class Scheduler {
  constructor(num) {
    this.num = num;
    this.count = 0;
    this.taskList = [];
  }

  add = async (fn) => {
    this.count >= this.num
      ? await new Promise((resolve) => this.taskList.push(resolve))
      : "";
    this.count++;

    const result = await fn();
    this.count--;

    if (this.taskList.length) {
      this.taskList.shift()();
    }

    return result;
  };
}

// 指定情景
const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(3000, 4);
addTask(2000, 2);
addTask(1000, 3);
addTask(900, 1);
