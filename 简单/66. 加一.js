/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    // let str = +digits.join('')
    // str = ++str
    // str = String(str).split('')
    // str = str.map(num => Number(num))
    // return str

    const end = digits.length - 1

    digits[end]++

    for (let i = end; i >= 0 ; i--) {
        if(digits[i] <= 9) return digits

        if(i === 0) {
            digits[i] = 0
            digits.unshift(1)
            return digits
        } else {
            digits[i] = 0
            digits[i - 1] += 1
        }
    }
    return digits
};


console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([9])) // [1, 0]
