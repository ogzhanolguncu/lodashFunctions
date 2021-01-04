const once = (func: Function) => {
  let alreadyCalled = false;
  return (...args: any) => {
    if (!alreadyCalled) {
      alreadyCalled = true;
      return func.apply(null, args);
    }
  };
};

const onceTest = once((...args: any) => console.log(`${args}`));

console.log(onceTest([1, 2, 3])); // Only returns first one --> [1, 2, 3]
console.log(onceTest([2, 3, 4])); // Returns nothing!
console.log(onceTest([4, 5, 6])); // Returns nothing!
