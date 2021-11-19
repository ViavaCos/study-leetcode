/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
    let count = 0
    while (n !== 1) {
      if(n % 2 === 0) {
        // 偶数直接除2
        n = n / 2
      } else {
        // 奇数需要判断+1和-1哪个最快。 这里也许可以缓存结果来优化
        n = integerReplacement(n - 1) > integerReplacement(n + 1) ? n+1 : n-1
      }
      count++
    }
  
    return count
  };
  
  
  // var integerReplacement = function(n) {
  //   /**
  //    * 含义:
  //    * dp[n] 整数n替换成1的最短操作次数
  //    * 
  //    * 推导公式:
  //    * dp[n - 1] / dp[n/2] / dp[n + 1]
  //    * 
  //    * 基础值:
  //    * dp[1] = 0, dp[2] = 1
  //    */
  //   const dp = [0, 0, 1]
  //   for (let i = 3; i <= n; i++) {
  //     if(i % 2 === 0) {
  //       dp[i] = dp[i / 2]
  //     } else {
  //       dp[i] = Math.min(dp[i - 1], dp[i + 1]) // error
  //     }
  //   }
  //   return dp[n]
  // };
  
  // var integerReplacement = function(n) {
  //   let count = 0
  //   while (n !== 1) {
  //     if(n % 2 === 0) {
  //       n = n / 2
  //     } else {
  //       n = n - 1
  //     }
  //     count++
  //   }
  
  //   return count
  // };
  
  [
    8, // 3
    7, // 4
    4, // 2 
    371, // 12 (not 13)  [371, 370, 185, 184, 92, 46, 23, 22, 11, 10, 5, 4, 2, 1] ---> [371, 372, 186, 93, 92, 46, 24, 12, 6, 3, 2, 1]
  ].forEach(num => {
    console.log(integerReplacement(num));
  })