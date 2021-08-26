/**
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

    每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

    返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/boats-to-save-people
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // 将待救援人员的体重进行排序
    people = people.sort((a,b) => b - a)
    
    let b = 0
    let l = 0
    let r = people.length - 1

    while(l <= r){
        let s = people[l] + people[r]
        if(s > limit) {
            // 两人体重大于限制则说明左边一人一船
            l++
        } else {
            // 反之，则两人同乘一船
            l++;
            r--;
        }
        b++
    }
    
    return b
};

/**
 * 之前的写法陷入了误区，--> 另一人的体重需要趋近于最大体重
 * 所以放弃了 首尾相加即可满足条件 的逻辑。。
 * 至于为什么会陷入这个误区，可能是因为一开始忘记了只能两人同乘的限制了。。
 */

let people = [1,2], limit = 3; // 1 艘船载 (1, 2)
console.log(numRescueBoats(people, limit));

people = [3,2,2,1]; limit = 3; // 3 艘船分别载 (1, 2), (2) 和 (3)
console.log(numRescueBoats(people, limit));

people = [3,5,3,4]; limit = 5; // 4 艘船分别载 (3), (3), (4), (5)
console.log(numRescueBoats(people, limit));

people = [21,40,16,24,30]; limit = 50; // 3
console.log(numRescueBoats(people, limit));