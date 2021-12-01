/**
 * @param {string} s
 * @return {number}
 */
// 动态规划
var maxPower = function(s) {
    const len = s.length
    if(len === 1) return 1
    const dp = new Array(len).fill(1)
    for(let i = 1; i<len; i++){
        if(s.charAt(i) === s.charAt(i-1)){
            dp[i] = dp[i-1] + 1
        }
    }
    return Math.max(...dp)
};

// 暴力破解
// var maxPower = function(s) {
//     const len = s.length
//     if(len === 1) return 1
//     let max = 1
//     let cur = 1
//     for(let i = 1; i<len; i++){
//         let letter = s.charAt(i)
//         if(s.charAt(i) == s.charAt(i - 1)){
//             cur++
//             max = Math.max(max, cur)
//         } else {
//             max = Math.max(max, cur)
//             cur = 1
//         }
//     }
//     return max
// };
