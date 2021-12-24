// 有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，
// 这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，
// 树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。
// 你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。
// 给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。
// 链接：https://leetcode-cn.com/problems/maximum-number-of-eaten-apples

// apples.length == n
// days.length == n
// 1 <= n <= 2 * 104
// 0 <= apples[i], days[i] <= 2 * 100000
// 只有在 apples[i] = 0 时，days[i] = 0 才成立


/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
 var eatenApples = function (apples, days) {
  // 当前剩余苹果数
  let storage = 0
  // 已过去的天数
  let i = 0;
  // 已吃掉的苹果数
  let eatNum = 0
  // 仍有未腐烂苹果的是第几天
  let haveStillNotBadAppleDay = 0

  while (storage > 0 || i <= apples.length) {

    // 当前库存中已无苹果 且 以后也不会再长新苹果， 则当前eatNum即为所求结果
    if (storage <= 0 && i > apples.length) return eatNum

    // if (apples[i]) {
    //   // 若今日新长了苹果，则吃个新鲜的
    //   apples[i] = apples[i] - 1
    //   eatNum++
    // } else if (storage > 0) {
    //   // 若有库存，则今日吃掉一个库存中的苹果
    //   storage--
    //   eatNum++
    // }

    let flag = false

    if (apples[i] && (storage == 0 || days[i] < 2)) {
      // 若今日新长了苹果，且库存里没有了 | 不能存入库存，才能吃个新鲜的
      apples[i] = apples[i] - 1
      eatNum++
    } else if (storage > 0) {
      // 若有库存，则今日吃掉一个库存中的苹果
      // storage--
      eatNum++
      flag = true
    }

    // 今日剩余苹果，存入库存
    storage += apples[i] || 0

    // console.log(9981, 1, 's:'+storage, apples[i], apples);

    // haveStillNotBadAppleDay 计算

    for (let j = haveStillNotBadAppleDay; j <= i; j++) {
      // 此日已无苹果
      if (!apples[j]) continue;

      // 记录哪天仍有未腐烂苹果（下次查找腐烂苹果则从这天开始查起）
      if (!apples[haveStillNotBadAppleDay]) haveStillNotBadAppleDay = j

      // 去除今日过后腐烂的苹果
      if (days[j] + j <= i + 1) {
        // console.log(9981, 2, 's:'+storage, apples[i], apples, 'j:' + j, apples[j], days[j], ' i:' + i);
        
        storage -= apples[j]
        // apples[j]中的数量可能包含今日吃掉的苹果数，所以这里需要控制库存数不能小于0
        // console.log(9981, 3, 's:'+storage, apples[i], apples);
        storage = storage <= 0 ? 0 : storage
        apples[j] = 0
      } else if(flag){
        storage--
        flag = false
      }
    }

    // 进入下一天
    i++
    console.log('storage:', storage, ' i:', i, ' eatNum:', eatNum, ' apples:', apples);
    if(i === 12) return 'BROKEN - DOWN'
  }
  return eatNum
};

[
  // {apples: [1,2,3,5,2], days: [3,2,1,4,2]}, // 7
  // {apples: [3,0,0,0,0,2], days: [3,0,0,0,0,2]}, // 5
  // {apples: [10,10,10,10,10,10], days: [1,1,1,1,1,1]}, // 6
  { apples: [2, 1, 10], days: [2, 10, 1] }, // 4
].forEach(item => {
  console.log(eatenApples(item.apples, item.days));
})

// var eatenApples = function (apples, days) {
//   // 当前剩余苹果数
//   let storage = 0
//   // 已过去的天数
//   let i = 0;
//   // 已吃掉的苹果数
//   let eatNum = 0
//   // 仍有未腐烂苹果的是第几天
//   let haveStillNotBadAppleDay = 0

//   while (storage > 0 || i <= apples.length) {

//     // 当前库存中已无苹果 且 以后也不会再长新苹果， 则当前eatNum即为所求结果
//     if (storage <= 0 && i > apples.length) return eatNum

//     if (apples[i]) {
//       // 若今日新长了苹果，则吃个新鲜的
//       apples[i] = apples[i] - 1
//       eatNum++
//     } else if (storage > 0) {
//       // 若有库存，则今日吃掉一个库存中的苹果
//       storage--
//       eatNum++
//     }

//     // 今日剩余苹果，存入库存
//     storage += apples[i] || 0

//     // haveStillNotBadAppleDay 计算

//     for (let j = haveStillNotBadAppleDay; j <= i; j++) {
//       // 此日已无苹果
//       if (!apples[j]) continue;

//       // 记录哪天仍有未腐烂苹果（下次查找腐烂苹果则从这天开始查起）
//       if (!apples[haveStillNotBadAppleDay]) haveStillNotBadAppleDay = j

//       // 去除今日过后腐烂的苹果
//       if (days[j] + j <= i + 1) {
//         storage -= apples[j]
//         // apples[j]中的数量可能包含今日吃掉的苹果数，所以这里需要控制库存数不能小于0
//         storage = storage <= 0 ? 0 : storage
//         apples[j] = 0
//       }
//     }

//     // 进入下一天
//     i++
//     console.log('storage:', storage, ' i:', i, ' eatNum:', eatNum, ' apples:', apples);
//   }

//   return eatNum
// };