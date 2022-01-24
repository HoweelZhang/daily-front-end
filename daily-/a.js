const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

/**
- 频率控制，返回函数连续调用时，action 执行频率限定为 1次 / delay
- @param delay  {number}    延迟时间，单位毫秒
- @param action {function}  请求关联函数，实际应用需要调用的函数
- @return {function}    返回客户调用函数
*/
function throttle (action, delay) {
  var pervious = 0;
  return function() {
    var _this = this;
    var args = arguments;
    var now = new Date();
    if (now - pervious > delay) {
      action.apply(_this, args);
      previous = now;
    }
  }
}

/**
- 频率控制，返回函数连续调用时，action 执行频率限定为 1次 / delay
- @param delay  {number}    延迟时间，单位毫秒
- @param action {function}  请求关联函数，实际应用需要调用的函数
- @return {function}    返回客户调用函数
*/
function debounce(action, delay) {
  var timer;
  return function() {
    var _this = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      action.apply(_this, args);
    }, delay)
  }
} 

function unique(arr) {
  var res = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      var outer = arr[i];
      var inner = arr[j];
      if (outer === inner) {
        ++i
        j = i
      }
    }
    res.push(arr[i])
  }
  return res
}