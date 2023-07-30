// 有问题先这样
class event {
  constructor() {
    this.topics = {};
  }

  subscribe = (topic, handler) => {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(handler);
  };

  publish = (topic, info) => {
    if (!this.topics[topic]) {
      return;
    }
    this.topics[topic].forEach((itemHandle) => {
      itemHandle(info);
    });
  };

  remove = (topic, handler) => {
    let handleIndex = this.topics[topic].indexOf(handler);
    this.topics[topic].splice(handleIndex, 1);
  };

  removeAll = () => {
    this.topics = {};
  };

  getEventHub = () => {
    return this.topics;
  };
}

// console.log(new event());

let test1 = (a, b, c) => {
  console.log(`+${a}+${b}+${c}`);
};
let test2 = (a, b, c) => {
  console.log(`*${a}*${b}*${c}`);
};
let test3 = (a, b, c) => {
  console.log(`#${a}#${b}#${c}`);
};

const observer = new event();
observer.subscribe("test", test1);
observer.subscribe("test", test2);
observer.subscribe("test", test3);
observer.remove("test", test3);
console.log(observer.getEventHub());
observer.publish("test", 1, 2, 3);
