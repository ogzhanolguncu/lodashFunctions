const throttle = (func: Function, duration: number) => {
  let shouldWait = false;
  return (...args: any) => {
    if (!shouldWait) {
      func.apply(null, args);
      shouldWait = true;
      setTimeout(function () {
        shouldWait = false;
      }, duration);
    }
  };
};
