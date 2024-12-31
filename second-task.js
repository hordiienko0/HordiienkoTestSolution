const curry = (fn) => {
    let args = [];
  
    return function next(arg) {
        args.push(arg);
  
      if (args.length === fn.length) {
        return fn(...args);
      }
  
      return next;
    };
  };
  
const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5));
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3));