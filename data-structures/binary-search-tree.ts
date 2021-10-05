class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  levelOrderTraversal(root: TreeNode = this.root): number[][] {
    const res: number[][] = [];
    let level: number = 0;
    traverse(root, level);
    return res;

    function traverse(node: TreeNode, level: number): void {
      if (node == null) return;
      if (level >= res.length) {
        res[level] = [];
      }
      res[level].push(node.value);
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
  }

  inorderTraversal(root: TreeNode = this.root): number[] {
    const res: number[] = [];
    traverse(root);
    return res;

    function traverse(node: TreeNode): void {
      if (node == null) return;
      traverse(node.left);
      res.push(node.value);
      traverse(node.right);
    }
  }

  preorderTraversal(root: TreeNode = this.root): number[] {
    const res: number[] = [];
    traverse(root);
    return res;

    function traverse(node: TreeNode): void {
      if (node == null) return;
      res.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }

  postorderTraversal(root: TreeNode = this.root): number[] {
    const res: number[] = [];
    traverse(root);
    return res;

    function traverse(node: TreeNode): void {
      if (node == null) return;
      traverse(node.left);
      traverse(node.right);
      res.push(node.value);
    }
  }

  isBalanced(): boolean {
    if (!this.root) return true;

    let result: boolean = true;
    traverse(this.root);
    return result;

    function traverse(node: TreeNode): void {
      if (!node) return null;

      if (node.left && node.left.value >= node.value) result = false;
      if (node.right && node.right.value <= node.value) result = false;

      traverse(node.left);
      traverse(node.right);
    }
  }

  getMinDepth(): number {
    if (!this.root) return 0;
    let depth: number = Infinity;
    traverse(this.root, 1);
    return depth;

    function traverse(node: TreeNode, level: number): void {
      if (!node.left && !node.right) {
        if (level < depth) {
          depth = level;
        }
      }
      if (node.left) {
        traverse(node.left, level + 1);
      }
      if (node.right) {
        traverse(node.right, level + 1);
      }
    }
  }

  maxDepth(): number {
    if (!this.root) return 0;
    let depth: number = -Infinity;
    traverse(this.root, 1);
    return depth;

    function traverse(node: TreeNode, level: number): void {
      if (!node) return null;

      if (level > depth) {
        depth = level;
      }

      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
  }

  averageOfLevels(): number[] {
    let average = {};
    traverse(this.root, 1);
    return Object.keys(average).map(key => average[key].value / average[key].count);

    function traverse(node: TreeNode, level: number) {
      if (!average[level]) {
        average[level] = {
          value: 0,
          count: 0,
        };
      }

      average[level].value += node.value;
      average[level].count += 1;

      if (node.left) {
        traverse(node.left, level + 1);
      }
      if (node.right) {
        traverse(node.right, level + 1);
      }
    }
  }

  isValidBst(node: TreeNode = this.root, min: TreeNode = null, max: TreeNode = null): boolean {
    if (node == null) return true;
    if (min && node.value <= min.value) return false;
    if (max && node.value >= max.value) return false;

    return this.isValidBst(node.left, min, node) && this.isValidBst(node.right, node, max);
  }

  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        newNode.parent = node;
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        newNode.parent = node;
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(value: number): boolean {
    this.root = this.removeNode(this.root, value);
    return true;
  }

  removeNode(node: TreeNode, value: number): TreeNode {
    // if the root is null then tree is empty
    if (node === null) {
      return null;
    }

    // if data to be delete is less than roots data then move to left subtree
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
      // if data to be delete is greater than roots data then move to right subtree
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
      // if data is similar to the root's data then delete this node
    } else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children
      //minumum node of the right subtree is stored in aux
      const aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  findMinNode(node: TreeNode): TreeNode {
    if (node.left == null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getMax(): number {
    let current: TreeNode = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  getMin(): number {
    let current: TreeNode = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  find(value: number): boolean {
    if (this.root == null) return false;
    let current: TreeNode = this.root;
    let valueExist: boolean = false;
    while (current != null) {
      if (value === current.value) {
        valueExist = true;
        break;
      } else if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    return valueExist;
  }
}

class TreeNode {
  value: number;
  parent: TreeNode | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

export default BinarySearchTree;
