// 变量的解构

// js
var obj = { a: 10, b: 20 }
var a = obj.a
var b = obj.b

var arr = ['xx', 'xxx', 'x']
var x = arr[0]

// ES6
const obj = { a: 10, b: 20, c:30 }
const { a, c } = obj
console.log(a)
console.log(c)

// 数组解构
const arr = ['xx', 'xxx', 'x']
const [x, y, z] = arr
console.log(x);
console.log(y);
console.log(z);
