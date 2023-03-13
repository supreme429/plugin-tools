import Vue from 'vue'

function convertTime(time: string): number {
  const [amt, t = "ms",] = String(time).split(/(ms|s)/i);
  const types = {
    ms: 1,
    s: 1000,
  };

  return Number(amt) * types[t];
}

function Throttle<C = Vue>(fn: Function, delay: string | number = 300): Function {
  const _delay = convertTime(String(delay));
  let lastTime = 0;
  return function (...args): void {
    const that: C = this;
    const currentTime = Date.now();
    if (currentTime - lastTime > _delay) {
      fn.apply(that, args);
      lastTime = currentTime
    }
  };
}

export { Throttle };
