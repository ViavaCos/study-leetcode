/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let obj = {}
//     nums.forEach(n => {
//         obj[n] = obj[n] ? ++obj[n] : 1
//     })

//     return obj[target] ? obj[target] : 0
// };
var search = function(nums, target) {
    let res = 0
    nums.forEach(n => {
        if(n === target) res++
    })

    return res
};