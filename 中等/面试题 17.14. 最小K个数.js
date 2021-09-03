/**
 * 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可
 *  输入： arr = [1,3,5,7,2,4,6,8], k = 4
 *  输出： [1,2,3,4]
 */


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {
    return arr.sort((a,b) => a - b).splice(0, k)
 };