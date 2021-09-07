/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
   let sum = 0
   let total = 0
   const len = s.length
   for (let i = 0; i < len; i++) {
        sum += s[i] === 'L' ? -1 : 1
        if(sum === 0) {
            total++
        }
   }

   return total
};

/**
 * 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。

    给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

    注意：分割得到的每个字符串都必须是平衡字符串。

    返回可以通过分割得到的平衡字符串的 最大数量 。


    "RLRRLLRLRL"   // 4
    "RLLLLRRRLR"   // 3
    "LLLLRRRR"     // 1
    "RLRRRLLRLL"   // 2


    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */