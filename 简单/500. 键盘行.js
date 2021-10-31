/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const codes = [ "qwertyuiop", "asdfghjkl", "zxcvbnm" ]
        let targetCodes;
        let res = []
    for(let i = 0; i<words.length; i++){
        targetCodes = codes.find(code => code.includes(words[i][0].toLowerCase()))
        let j = 1
        if(words[i].length === 1) {
            res.push(words[i])
            continue
        }
        while(targetCodes.includes(words[i][j].toLowerCase())){
            j++
            if(j === words[i].length){
                res.push(words[i])
                break;
            }
        }
    }
    return res
};