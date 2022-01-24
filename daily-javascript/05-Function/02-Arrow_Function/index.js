// 箭头

// js
var arr = [1, 2, 3]
arr.map(function(item) {
  return item + 1
})

// ex6
const constArr = [1, 2, 3, 4]
constArr.map(item => item + 1)
constArr.map((item, index) => {
  console.log(index)
  return item + 1
})

// js
function fn() {
  console.log('real', this);
  var arr2 = [1, 2, 3]
  arr2.map(function (item) {
    console.log('js', this);
    return item + 1
  })

  // 箭头函数
  arr2.map(item => {
    console.log('es6', this);
    return item + 1
  })
}

window.fn.call({ a: 100 })