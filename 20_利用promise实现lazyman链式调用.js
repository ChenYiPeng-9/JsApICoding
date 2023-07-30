class lazyMan {
  constructor() {
    this.executeChain = Promise.resolve();
  }

  eat = (food) => {
    this.executeChain = this.executeChain.then(() => {
      console.log(`${food}`);
      return Promise.resolve();
    });
    return this;
  };

  sleep = (delay) => {
    this.executeChain = this.executeChain.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`睡了${delay}ms`);
          resolve();
        }, delay);
      });
    });
    return this;
  };
}

new lazyMan().eat("shuiguo").sleep(2000).eat("tangg");
