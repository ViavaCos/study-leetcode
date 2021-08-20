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

        if(sum === max){
            start = time
            end = i
        }

        // console.log(sum, '     ', time, 'i:', i, start, end)

        if (i == nums.length - 1) {
            sum = 0
            i = time++
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