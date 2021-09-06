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
    
    let start = 0, end = nums.length
    while (start <= end) {
      // 中间索引
      const mid = Math.floor((end - start) / 2) + start
      // 中间值
      const num = nums[mid]
      if(num === target){
        // 中间值等于目标值, 直接返回索引
        return mid
      } else if(num < target){
        // 中间值小于目标值，说明如果数组中存在目标值应该在数组的右侧
        // 所以，起始值索引为中间索引向右一位
        start = mid + 1
      } else {
        // 中间值大于目标值，说明如果数组中存在目标值应该在数组的左侧
        // 所以，结束索引为中间索引向左一位
        end = mid -1
      }
    }

    // 上述条件皆不满足，则返回-1
    return -1
};

// console.log(search([0,1,2,3,4,5,6,7,8,9], 3)); // 3
// console.log(search([-1,0,3,5,9,12], 9)); // 4