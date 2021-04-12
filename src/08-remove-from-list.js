/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 * let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3, //==k
      next: {
        value: 4,
        next: null
      }
    }
  }
};
 */
/* let currentObj, currentObj;
currentValue = l.value;
currentObj = l.next;
while(currentObj){
  if (currentVal == k){
    currentObj =
  }
  currentObj = currentObj.next;
}
*/
function removeKFromList(/* l, k */) {
  /* if (l === null) {
    return null;
  }

  if (l.value === k) {
    return removeKFromList(l.next, k);
  }

  const x = new ListNode(l.value);
  x.next = removeKFromList(l.next, k);
  return x; */
  throw new Error('Not implemented');
}

module.exports = removeKFromList;
