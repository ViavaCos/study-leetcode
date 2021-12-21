/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

/**
 * Ver 1.0
 * 执行过慢
 */
// var findRadius = function(houses, heaters) {
//     let rangeArr = new Array(houses.length).fill(Infinity)
//     for (let i = 0; i < houses.length; i++) {
//         for (let j = 0; j < heaters.length; j++) {
//             rangeArr[i] = Math.min(Math.abs(houses[i] - heaters[j]), rangeArr[i])
//         }
//     }

//     return Math.max(...rangeArr)
// };


[
//  { houses: [1,2,3], heaters: [2] }, // 1
//  { houses: [1,2,3,4], heaters: [1,4] }, // 1
 { houses: [1,5], heaters: [2] }, // 3
].forEach(item => {
    console.log(findRadius(item.houses, item.heaters));
})

/**
 * 1 <= houses.length, heaters.length <= 3 * 104
 * 1 <= houses[i], heaters[i] <= 109
 */
