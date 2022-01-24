// 深度优先遍历和广度优先遍历
// dfs
// 递归
const deepTraversal = (node, nodeList) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children
    for (let index = 0; index < children.length; index++) {
      const node = children[index];
      deepTraversal(node, nodeList)
    }
  }
}

// 非递归
const deepTraversal1 = (node) => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while(stack.length) {
      let node = stack.pop()
      let children = node.children
      nodes.push(node)
      for (let index = 0; index < children.length; index++) {
        const node = children[index];
        stack.push(node)
      }
    }
  }
  return nodes
}

// bfs
let boundTraversal = (node) => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while(stack.length) {
      let node = stack.shift()
      let children = node.children
      nodes.push(node)
      for (let index = 0; index < children.length; index++) {
        const node = children[index];
        stack.push(node)
      }
    }
  }
  return nodes
}