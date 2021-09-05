
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // 因为括号都是成对出现的，所以如果长度不是偶数则必定不满足条件
    if(s.length % 2 !== 0) return false
    
    // 初始化一个数组，用于盛放闭合括号。
    var list = []
    // 单循环。用于遍历字符串的每一项
    for(var i = 0; i< s.length; i++){
        // 如果遇到小括号的开括号，则在存入一个对应的闭合括号
        if(s[i] === '('){
            list.push(')')
            s = s.substring(1) // 并在字符串中去掉本项
            i-- // 去掉本项后索引向前移一位
            continue // 后面代码不在执行，开始新一轮循环
        }
        if(s[i] === '['){
            list.push(']')
            s = s.substring(1)
            i--
            continue
        }
        if(s[i] === '{'){
            list.push('}')
            s = s.substring(1)
            i--
            continue
        }
        // 如果遇到的是闭合括号
        if(s[i] === ')' || s[i] === ']' || s[i] === '}'){
            // console.log(s[i] !== list[list.length - 1], s[i], list[list.length - 1], list, list.length-1)
            // 闭合括号在数组中的最后一位不相等则说明条件不满足
            // 比如({)}, 遇到首个小括号的开时，数组存入了一个小括号的闭
            // 遇到花括号的开时，数组存入了一个花括号的闭
            // 紧接着又遇到了一个小括号的闭，但是此时数组中存入的
            // 最后一位元素是花括号的闭，因此该字符串不符合条件
            if(s[i] !== list[list.length - 1]) return false
            // 如果最后一位是对应的闭合括号，则删除此项
            const index = list.lastIndexOf(s[i])
            index >= 0 ? list.splice(index, 1) : null
        }
    }
    // 最后，所有循环结束 如果数组中还存在元素，则说明亦不符合条件
    return !list.length
};