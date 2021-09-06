/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
   你可以假设 nums 中的所有元素是不重复的
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(!nums.length) return -1
    let mid = Math.floor(nums.length / 2)
    if(target <= nums[mid]) {
        // 左
        for (let i = 0; i <= mid; i++) {
            if(nums[i] === target) {
                return i
            }          
        }
    } else {
        // 右
        for (let i = mid + 1; i < nums.length; i++) {
            if(nums[i] === target) {
                return i
            }          
        }
    }

    return -1
};