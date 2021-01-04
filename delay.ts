const delay = (func: Function, duration: number) => {
  return (...args: any) => setTimeout(() => func.apply(null, args), duration);
};

const deferred = delay((...args: any) => console.log(...args), 1000);

console.log('Logs immediately');
deferred('Logs after one second.');
