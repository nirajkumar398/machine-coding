export const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(context, ...args);
      }, d);
    };
  };
  
  export const myThrottle = (cb, d) => {
    let last = 0;
    return function (...args) {
      const context = this;
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      cb(context, ...args);
    };
  };