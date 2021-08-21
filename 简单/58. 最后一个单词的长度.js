/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var length = 0
    for(var i = s.length - 1; i>= 0; i--){
        if(s[i] === ' '){
            if(!length) continue;
            return length
        }  else {
            length++
        }
    }
    return length
};

var s1 = "Hello World" // 5
var s2 = "   fly me   to   the moon  " // 4
var s3 = "luffy is still joyboy" // 6

console.log(lengthOfLastWord(s1));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));

console.log(new Date());