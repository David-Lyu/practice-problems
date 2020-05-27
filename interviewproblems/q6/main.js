//binary search tree
class TreeNode {
  constructor(value:number) {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    this.value = number;
    this.left = null;
    this.right = null;
  };
};

//1
//2
//3
//4
//5
//left and right point to another node in space
//if you have a node everything to the left is less
//every thing right is more
// ex: node = 10; left 4, right 20

//BST(binary search tree) does not handle duplicate but general convention might go left
//different binary tree
class BST {
  head: TreeNode

  constructor() {
    this.head = null;
  };

  public add = (value: number, node = this.head): void => {
    if (this.head === null) {
      this.head = new TreeNode(value);
      return;
    };
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
        return;
      };
      this.add(value, node.left);
      return;
    };
    if (value > node.value) {
      if (node.right === null) {
        node.right = new TreeNode(value);
        return;
      }
      this.add(value, node.right);
      return;
    };
  };
};

//tc log(n)
//everytime it compares it spilts the time of n by half,
//as you keep iterarting split that by half and so forth



const Tree = new BST();
console.log(Tree.add(20))
console.log(Tree.add(10))
console.log(Tree.add(40))
console.log(Tree.add(15))
console.log(Tree.add(5))
console.log(Tree.head); =>
