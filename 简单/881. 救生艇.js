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
    let boatsNum = 0
    for (let i = 0; i < people.length; i++) {
        // 若只有一个人等待救援，那直接开走一条船
        if(people.length == 1) {
            boatsNum++;
            return boatsNum
        }

        boatsNum++ // 准备好一条船
        // 计算当前船只的剩余容量
        let diff = limit - people[i]
        people.splice(i, 1); // 从待救援人员中，去掉此人

        // 若当前这个人刚好占满一条船的全部容量
        if(diff == 0) {
            i = -1 // 回溯到起始索引 (i++ 后索引为0)
            continue // 直接开走这条船
        }

        for (let k = 0; k < people.length; k++) {
            i = -1 // 直接回溯

            // 当前这个人的体重不满足共乘一船，则换下一个人来测试
            if(people[k] > diff) continue;
            
            // 当前这个人满足共乘一船
            if(people[k] <= diff) {
                diff -= people[k]   // 计算当前这条船的剩余容量
                people.splice(k, 1) // 从待救援人员中，去掉此人
            }
            // 如果船已满，则不再寻找共乘一船的人
            if(diff == 0) break;

            // 若船未满
            k = -1 // 回溯到起始索引 (i++ 后索引为0)
        }
    }
    return boatsNum
};



let people = [1,2], limit = 3; // 1 艘船载 (1, 2)
console.log(numRescueBoats(people, limit));

people = [3,2,2,1]; limit = 3; // 3 艘船分别载 (1, 2), (2) 和 (3)
console.log(numRescueBoats(people, limit));

people = [3,5,3,4]; limit = 5; // 4 艘船分别载 (3), (3), (4), (5)
console.log(numRescueBoats(people, limit));

people = [21,40,16,24,30]; limit = 50;
console.log(numRescueBoats(people, limit));