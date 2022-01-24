function debounce(fn, wait, immediate) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

// demo
window.onscroll = debounce(function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  console.log('滚动距离' + scrollTop)
}, 300, true)