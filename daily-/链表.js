// 链表 linkedList
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// [1, next] -> [2, next]
const node1 = new ListNode(1)
nod1.next = new ListNode(2)

// 插入节点3 [1, next] -> [3, next] -> [2, next]
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// 删除节点3
node1.next = node3.next

// 定位目标节点的前驱节点
const targetNode = node1.next
nod1.next = targetNode.next