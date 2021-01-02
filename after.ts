const after = (times: number, func: Function) => {
  let counter = 1;
  return (...args: any) => {
    if (counter === times) return func.apply(null, args);
    else counter++;
  };
};

const afterTest = after(2, (...args: any) =>
  console.log(`Saved with args ${args}`)
);

console.log(afterTest()); // Undefined
console.log(afterTest([1, 2, 3, 4, 5, 6])); // Returns Saved with args [1, 2, 3, 4, 5, 6]
