
var CQueue = function() {
    this.stack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack.push(value)
    return null
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.stack.length){
        return -1
    }

    return this.stack.shift()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
*/



/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */