/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
    // 除数为0 或 除数小于被除数，则直接返回0
    if (dividend == 0 || Math.abs(dividend) < Math.abs(divisor)) return 0
  
    let res = 0 // 结果
    let isNegative = false // 结果是否为负数
  
    // 若除数或被除数中某个为负数， 则结果终将是负数
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      isNegative = true
      // 除数与被除数转为绝对值
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    // 两数相等，直接返回1
    if(dividend === divisor) return isNegative ? -1 : 1
  
    // 被除数是1，返回除数
    if(divisor === 1) return isNegative ? getLimitVal(-dividend) : getLimitVal(dividend)
    while (dividend >= divisor) {
      dividend -= divisor
      res++
    }
    return isNegative ? getLimitVal(-res) : getLimitVal(res)
  };
  
  // (辅助函数)获取有效值
  function getLimitVal(val){
    if(val < Math.pow(-2,31)){
      return Math.pow(-2,31)
    } else if(val > Math.pow(2,31) - 1) {
      return Math.pow(2,31) - 1
    }
    return val
  }