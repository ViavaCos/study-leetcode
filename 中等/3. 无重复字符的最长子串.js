/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    if (!s) return 0
    if (s.length == 1) return 1
  
    let arr = [0]
    let num = 1
    let start = 0
  
    for (let i = 1; i < s.length; i++) {
      // console.log(10086, s.substring(start, i), s[i]);
      if (s.substring(start, i).includes(s[i])) {
        arr.push(num)
        num = 1
        // 计算回溯点（当前字符串重复时，需要将起始匹配索引向左回溯）
        let index = s.substring(start, i).indexOf(s[i]) + start
        if(index >= 0 && index !== i - 1){
          // console.log('回溯点:', index, i);
          start = index + 1
          i = start
        }
      } else {
        num++
        i == s.length - 1 && arr.push(num)
      }
    }
    return Math.max(...arr)
};
  

// 测试代码
// 3 1 3 0 2 3 5
[
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "",
    "au",
    "dvdf",
    "anviaj"
].forEach(s => {
    console.log(lengthOfLongestSubstring(s));
})
