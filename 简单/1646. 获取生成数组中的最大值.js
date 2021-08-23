/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if(n === 0 || n === 1) return n

    var max = 1
    var arr = [0, 1]

    

    for (let i = 1; i <= n; i++) {
        if(2 <= 2 * i && 2 * i <= n) {
            arr[2 * i] = arr[i]
            max = Math.max(max, arr[2 * i])
        }
        
        if(2 <= 2 * i + 1 && 2 * i + 1 <= n) {
            arr[2 * i + 1] = arr[i] + arr[i + 1]
            max = Math.max(max, arr[2 * i + 1])
        }
    }

    // console.log(max);
    return max
};




console.log(getMaximumGenerated(7)); // 3
console.log(getMaximumGenerated(2)); // 1
console.log(getMaximumGenerated(3)); // 2



// 输入：n = 7
// 输出：3
// 解释：根据规则：
//   nums[0] = 0
//   nums[1] = 1
//   nums[(1 * 2) = 2] = nums[1] = 1
//   nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
//   nums[(2 * 2) = 4] = nums[2] = 1
//   nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
//   nums[(3 * 2) = 6] = nums[3] = 2
//   nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// 因此，nums = [0,1,1,2,1,3,2,3]，最大值 3

// 0 <= n <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/get-maximum-in-generated-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。