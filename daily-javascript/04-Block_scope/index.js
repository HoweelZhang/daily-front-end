// 块级作用域

// js
var obj = { a: 100, b: 20 }
for (var i in obj) {
  // if (Object.hasOwnProperty.call(obj, i)) {
  //   const element = obj[i];
  //   console.log(i);
  // }
  console.log(i); // a b
}

// ES6
const obj1 = { a:10, b:20 }
for (const n in obj1) {
  // if (Object.hasOwnProperty.call(obj1, n)) {
  //   const element = obj1[n];
  //   console.log(element);
  // }
  console.log(n);
}