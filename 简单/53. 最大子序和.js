/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity
    let sum = 0
    // let start = 0
    // let end = 0
    let time = 0

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i]
        max = Math.max(max, sum)
        // 如果本次相加和为最大值，则储存开始和结束索引
        // if(sum === max){
        //    start = time
        //    end = i
        // }

        // console.log(sum, '     ', time, 'i:', i, start, end)
        
        // 本次叠加至数组最后一位
        if (i == nums.length - 1) {
            sum = 0 // 清空相加的和
            i = time++ // 赋值从第几位开始(这里用后++是因为i值有i++， 所以只需要让time自增即可)
        }
    }
    // console.log('max:', max);
    // 截取: 开始索引 至 结束索引减去开始索引加1(自身)
    // return nums.splice(start, end - start + 1)
    return max
};


// const arr = [-2,1,-3,4,-1,2,1,-5,4] // [4,-1,2,1]   max: 6
// const arr = [-2,1,-3,4,-1,2,1,2,4] // [ 4, -1, 2, 1, 2, 4 ]  max:12
// console.log(maxSubArray(arr))
