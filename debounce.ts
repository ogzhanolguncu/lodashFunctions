const debounce = (
  func: Function,
  wait: number,
  immediate?: boolean,
  args?: any
) => {
  let timeout: number | undefined;

  return () => {
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = undefined;
      if (!immediate) func.apply(null, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(null, args);
  };
};

const myEfficientFn = debounce(function () {
  console.log('Hello');
}, 1000);

window.addEventListener('resize', myEfficientFn);
