/**
* @param {number} a
* @param {number} b
* @return {number}
*/
var getSum = function(a, b) {
    while(a!=0){
        //按位与得到进位
        var carry = a&b;
        //按位异或得到每一位的和
        var noCarrySum = a ^ b;
        a = carry << 1;
        b = noCarrySum;
    }
    return b;
};