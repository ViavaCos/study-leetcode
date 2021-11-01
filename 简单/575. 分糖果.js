/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    const num = candyType.length / 2
    const type = Array.from(new Set(candyType)).length
    return type - num <= 0 ? type : num
};