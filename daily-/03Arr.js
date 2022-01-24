// 数组
// 1.合并两个有序数组
const num1 = [1,2,3]; m = 3
const num2 = [2,5,6]; n = 3

function mergeArr(arr1, arr2) {
  const tempArr = [...arr1, ...arr2];
  return tempArr.sort((a, b) => a-b)
}

// 2. 两数之和
// 给定 nums = [2,7,11,15], target = 9
// 应为 nums[0] + nums[1] = 2 + 7 = 9
// 返回 [0 ,1]
function towSum(arr ,target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const restVal = target - arr[i];
    if (map.has(restVal)) {
      return [map.get(restVal), i]
    }
    // value: index
    map.set(arr[i], i)
  }
}

// 3. 三数之和
// 给你⼀个包含 n 个整数的数组 nums ，
// 判断 nums 中是否存在三个元素 a ， b ， c ，使得 a + b + c = 0 ？请你找出所有满⾜条件且不᯿复的三元组。
/** 
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 满⾜要求的三元组集合为：
[
 [-1, 0, 1],
 [-1, -1, 2] ]
*/
function threeSum (arr) {
  let map = new Map()
  let res = []
  for (let i = 0; i < arr.length - 2; i++) {
    const first = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      const second = 0 - arr[k] - first;
      if (map.has(second)) {
        res.push([first, second, arr[k]])
      }
      map.set(arr[k],k)
    }
    map.clear()
  }
  return res
}

// 数组去重、扁平化、排序
const unique = (arr) => Array.from(new Set(arr))
const flattenDeep = (arr) => arr.flat()
const sort = (arr) => arr.sort((a,b) => a-b)
const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)
const unique_sort_flat = compose(flattenDeep, sort, unique)
