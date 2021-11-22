/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.origin = [...nums]
    this.arr = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let randomR = function (min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const n = this.arr.length - 1
    for(let i=0; i<=n; i++){
        let r = randomR(0, n)
        let t = this.arr[i]
        this.arr[i] = this.arr[r]
        this.arr[r] = t
    }
    return this.arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */