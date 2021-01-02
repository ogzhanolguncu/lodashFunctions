const before = (times: number, func: Function) => {
  let counter = 1;
  return (...args: any) => {
    if (counter < times) {
      counter++;
      return func.apply(null, args);
    }
  };
};

const beforeTest = before(3, (...args: any) => console.log(`${args}`));

console.log(beforeTest([1, 2, 3])); // Returns [1, 2, 3]
console.log(beforeTest([2, 3, 4])); // Returns [2, 3, 4]
console.log(beforeTest([4, 5, 6])); // Returns nothing!
