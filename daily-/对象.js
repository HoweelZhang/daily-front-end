/**
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 9, 所以返回[0, 1]
 */

function towSum(nums, target) {
	// map = { num[i] : i }
	const map = {}
	const len = nums.length
	for (let i = 0; i < len; i++) {
		let mapKey = target - nums[i]
		if (map[mapKey] !== undefined) {
			return [map[mapKey], i]
		}
		mapKey = nums[i]
		map[mapKey] = i
	}
}

/**
 * 
 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 *  */

function merge(nums1, m, nums2, n) {
	// 定义两个指针
	let i = m - 1
	let j = n - 1
	let k = m + n - 1
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i]
			i--
			k--
		} else {
			nums1[k] = nums2[j]
			j--
			k--
		}
	}
	while (j >= 0) {
		nums1[k] = nums2[j]
		k--
		j--
	}
}

/*
真题描述：给你两个有序整数数组 nums1 和 nums2，
请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

示例
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6]
* */

function treeSum(nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len -2; i++ ) {
    const j = i + 1
    const k = len - 1
    while(j < k) {
      const sum = nums[i] + nums[j]+nums[k]
      // 左指针右移动
      if (sum > 0) {
        k--
        while (j < k && nums[k] === nums[k-1]) {
          k--
        }
      }
      // 右指针左移动
      if (sum < 0) {
        j++
        // 元素重复
        while(j < l && nums[j] === nums[j-1]) {
          j++
        }
      }
      // sum === 0，满足条件
      res.push([nums[i], nums[j], nums[k]])
      j++;k--;
      while(j < k && nums[j] === [j-1]) {
        j++
      }
      while(j < k && nums[k] === [k+1]) {
        k--
      }
    }
  }
  return res
}



