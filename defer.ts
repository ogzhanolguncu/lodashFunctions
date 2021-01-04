const defer = (func: Function) => {
  return (...args: any) => setTimeout(() => func.apply(null, args));
};

const deferred = defer((...args: any) => console.log(...args));

// deferred("Deferred-1")
// deferred("Deffered-2")
// console.log("Content:")

for (let i = 1; i <= 5; i++) {
  deferred(i);
}
console.log('Integers are as follows:');
