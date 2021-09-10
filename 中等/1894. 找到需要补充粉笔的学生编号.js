/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
// time: 13.39%  storage:87.50%
var chalkReplacer_ = function(chalk, k) {
    const len = chalk.length
    for (let i = 0; i < len; i++) {
        // 若当前粉笔够当前学生使用，则当前学生需要补充粉笔
        if(k < chalk[i]){
            return i
        }
        // 足够本次使用，则减去使用的粉笔数
        k -= chalk[i]
        // console.log('K', k, ' i:', i, '----', chalk[i]);

        // 走完一轮后，索引回溯
        if(i == len - 1){
            i =  - 1
        }
    }
};

// time: 89.29%  storage:85.71%
var chalkReplacer = function(chalk, k) {
    let rest = k % (chalk.reduce((pre, cur) => pre + cur))
    const len = chalk.length

    for (let i = 0; i < len; i++) {
        if(rest < chalk[i]){
            return i
        }
        rest -= chalk[i]
    }
}


console.log(chalkReplacer([5,1,5], 22)); // 0
console.log(chalkReplacer([3,4,1,2], 25)); // 1