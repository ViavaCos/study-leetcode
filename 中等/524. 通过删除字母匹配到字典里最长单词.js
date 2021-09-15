/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function (s, dictionary) {
    dictionary = dictionary.sort() // 谜一样的字典序
    // console.log(dictionary);
    var len = dictionary.length
    let max = ''
    let endIdx = s.length // 匹配截止索引
    for (let i = 0; i < len; i++) {
      let ss = 0 // 字符串起始索引
      let ds = 0 // 字典子字符串起始索引
      while (ss == 0 || !(ss == s.length || ds == dictionary[i].length)) {
        if (s[ss] == dictionary[i][ds]) {
          ss++
          ds++
          continue
        }
        ss++
      }
  
      endIdx = Math.min(ss, endIdx)
      if (ds == dictionary[i].length) {
        // console.log('ds:', ds, ' max.length:', max.length, ' ss:', ss, ' endIdx:', endIdx, ' dictionary[i]:', dictionary[i]);
        // console.log(max, dictionary[i]);
        max = ds === max.length
          // ? ss == Math.min(ss, endIdx) ? dictionary[i] : max
          ? [max, dictionary[i]].sort()[0]
          : ds == Math.max(ds, max.length) ? dictionary[i] : max
      }
    }
  
    return max
  };
  
  
  // console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
  // console.log(findLongestWord("abpcplea", ["a","b","c"])); // "a"
  // console.log(findLongestWord("abce", ["abe","abc"])); // "abc"
  // console.log(findLongestWord("bab", ["ba","ab","a","b"])); // "ab"
  // console.log(findLongestWord("foobarfoobar", ["foo","bar"])); // "bar"
  