// 栈 push pop
const stack = []
stack.push('东北大米')
stack.push('可爱多')
stack.push('巧乐兹')

while (stack.length) {
	const top = stack[stack.length - 1]
	console.log('现在取出来的冰淇淋是', top)
	// 将栈顶元素出栈
	stack.pop()
}

console.log(stack)

// 队列 push shift
const queue = []
queue.push('小哥1')
queue.push('小哥2')
queue.push('小哥3')

while (queue) {
	const top = queue[0]
	console.log(top)
	queue.shift()
}

console.log(queue)

// 连续的内存空间
const arr = [1, 2, 3, 4]
// 非连续的内存空间，js 数组不再具有数组的特性，其底层使用哈希映射分配内存空间，是由对象链表来实现的
const arr1 = [1, '223', { a: 1 }]
