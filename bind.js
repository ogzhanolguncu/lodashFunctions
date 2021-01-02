const bind = (func, obj) => {
  return () => func.bind(obj);
};

var obj = {
  Name: 'GeeksforGeeks',
  Address: 'Noida',
};

var fun = function () {
  return 'Welcome to ' + this.Name + '\nAddress: ' + this.Address;
};

var func = bind(fun, obj);
console.log(func()());
