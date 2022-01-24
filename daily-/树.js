/**
 * 根节点
 * 高度：树结点的最大高度
 * 度：一个结点开叉出去多少个子树
 * 
 * 二叉树：没有根节点，作为一个空树或由根节点、左右树组成，且左右子树都是二叉树
 * **/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}

const node = new TreeNode(1)


// 二叉树的常见遍历
// 按照顺序规则分类1: 前序、中序、后序、层次
// 递归遍历（前、中、后序遍历）
// 迭代遍历（层次遍历）
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}