/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let f = []
    let s = []
    while (l1) {
      f.push(l1.val)
      l1 = l1.next
    }
    while (l2) {
      s.push(l2.val)
      l2 = l2.next
    }
  
    let res = (BigInt(f.reverse().join('')) + BigInt(s.reverse().join(''))).toString().split('').reverse()
    let returns, temp;
  
    for (let i = 0; i < res.length; i++) {
      if(!returns) {
        returns = new ListNode(res[i])
        temp = returns
      } else {
        temp.next = new ListNode(res[i])
        temp = temp.next
      }
    }
    return returns
  };
  
  // 辅助函数
  function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }