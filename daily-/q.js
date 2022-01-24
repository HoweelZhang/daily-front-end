// 实现sleep 函数
/**
 * 
- 使当前运行的异步操作（promise 或者 async）停止等待若干秒
- 
- @param ms */
(async () => {
  console.log('hello')
  await sleep(2000) // 等待两秒
  console.log('world')
})()

// 实现throttle 节流函数
const throFun = () => console.log('hello');
const thro = throttle(throFun, 300);
document.body.onscroll = () => {
  thro();  // 调用至少间隔 300 毫秒才会触发一次
}

// 实现 debounce 防抖函数
const throFun = () => console.log('hello');
const thro = debounce(throFun, 300);
document.body.onscroll = () => {
  thro();  // 若一直调用则不会执行，空闲时间大于 300 毫秒才会执行
}

// 数组去重
const arr = [1,2,3,4,4,3,2,1];