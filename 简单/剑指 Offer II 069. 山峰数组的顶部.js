/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    for(let i = 0; i< arr.length; i++){
        // 正向检索: 若当前数字大于右边数字时，说明此时索引即是山峰
        if(arr[i] > arr[i+1]) return i
        // 反向检索: 若当前数字小于右边数字时，说明此时索引即是山峰
        if(arr[arr.length-i] < arr[arr.length-i+1]) return arr.length-i+1
    }
};
