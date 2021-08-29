/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    const right = arr.length
    let sum = 0
    for (let left = 0; left < right; left++) {
        let copyR = right
        while (left <= copyR) {
            if((copyR - left) % 2) {
                // console.log(sum, '===>', left, copyR, right);
                // console.log(arr.slice(left, copyR));
                sum += arr.slice(left, copyR).reduce((acc, cur) => acc += cur )
            }
            copyR--
        }
        // console.log(sum);
    }
    return sum
};

const arr = [1,4,2,5,3]
console.log('Result:', sumOddLengthSubarrays(arr));




/**
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

子数组 定义为原数组中的一个连续子序列。

请你返回 arr 中 所有奇数长度子数组的和 。

输入：arr = [1,4,2,5,3]
输出：58
解释：所有奇数长度子数组和它们的和为：
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */