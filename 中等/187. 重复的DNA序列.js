/**
 * A C G T
 * @param {string} s
 * @return {string[]}
 */
// 执行超时
// var findRepeatedDnaSequences = function(s) {
//   let len = s.length

//   if(len < 10) return []

//   const res = []
//   let f = ''
//   let e = ''

//   for (let i = 0; i < len; i++) {
//     f = s.substr(i, 10)
//     if(f.length < 10) break

//     for (let j = 1; j <= len - i; j++) {
//       e = s.substr(i+j, 10)
//       if(e.length < 10) break
//       if(f == e && res.indexOf(f) == -1) {
//         res.push(f)
//       }
//     }
//   }

//   return res
// };

// 使用Map数据结构
var findRepeatedDnaSequences = function(s) {
    // 若字符串s的长度不足10， 则直接返回空数组
    let len = s.length
    if(len < 10) return []
  
    const map = new Map
    const res = []
  
    for (let i = 0; i < len; i++) {
      // 截取长度为10的子串
      let sub = s.substr(i, 10)
      // 获取当前子串在map中的值
      map.set(sub, (map.get(sub) || 0) + 1)
      // 如果当前子串在map中的值为2，则在结果中记录，其它情况不记录
      if(map.get(sub) === 2){
        res.push(sub)
      }
    }
  
    return res
  };
  
  
  
  
  
  
  
  
  
  // ["AAAAACCCCC","CCCCCAAAAA"]
  console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
  
  // ["AAAAAAAAAA"]
  console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));