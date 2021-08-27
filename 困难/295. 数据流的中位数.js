    /**
     * initialize your data structure here.
     */
    var MedianFinder = function() {
        this.dataArr = []
        this.mid = -Infinity
    };

    /** 
     * @param {number} num
     * @return {void}
     */
    MedianFinder.prototype.addNum = function(num) {
        // let len = this.dataArr.length
        // if(!len) {
        //     this.dataArr.push(num)
        //     return
        // }

        // let insert = -1
        // let mid = Math.floor(len / 2)
        // if(num <= this.dataArr[mid]) {
        //     for (let i = 0; i <= mid; i++) {
        //         if(this.dataArr[i] >= num){
        //             insert = i
        //             break;
        //         }
        //     }
        // } else {
        //     for (let i = mid; i < len; i++) {
        //         if(this.dataArr[i] >= num){
        //             insert = i
        //             break;
        //         }
        //     }
        // }

        // if(insert < 0) {
        //     this.dataArr.push(num)
        //     return
        // }
        // const newArr = this.dataArr.splice(insert)
        // this.dataArr = this.dataArr.concat(num, newArr)
        this.dataArr.push(num)
    };

    /**
     * @return {number}
     */
    MedianFinder.prototype.findMedian = function() {
        console.log(this.dataArr);
        this.dataArr = this.dataArr.sort((a,b) => a - b)
        
        const len = this.dataArr.length

        if(!len) return

        const mid = Math.floor(len / 2)
        if(len % 2) {
            this.mid = this.dataArr[mid]
        } else {
            this.mid = (this.dataArr[mid - 1] + this.dataArr[mid]) / 2
        }
        return this.mid
    };

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
// obj.addNum(1)
// obj.addNum(2)
// console.log(obj.findMedian()); // 1.5
// obj.addNum(3)
// console.log(obj.findMedian()); // 2

// const op = ["addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
// const arr = [[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]

const op = ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
const arr =[[],[40],[],[12],[],[16],[],[14],[],[35],[],[19],[],[34],[],[35],[],[28],[],[35],[],[26],[],[6],[],[8],[],[2],[],[14],[],[25],[],[25],[],[4],[],[33],[],[18],[],[10],[],[14],[],[27],[],[3],[],[35],[],[13],[],[24],[],[27],[],[14],[],[5],[],[0],[],[38],[],[19],[],[25],[],[11],[],[14],[],[31],[],[30],[],[11],[],[31],[],[0],[]]

op.forEach(item => {
    item === 'addNum'
    ? obj.addNum(arr[0][0])
    : console.log(obj.findMedian())
    arr.splice(0, 1)
})