import Queue from './queue'

/**
 * Dúvidas
 * - E se a posição a ser inserida n for uma folha?
 * - ver versão recursiva
 * - pra q o parent?
 * - Como que balanceia?
 */

class BinarySearchTree {
  private _root: Node

  constructor () {
    this._root = null
  }

  insert (data: any): void {
    const node = new Node(data)

    if (!this._root) {
      this._root = node
      return
    }

    this.insertNode(this._root, node)
  }

  insertNode (root: Node, node: Node): void {
    if (root.data < node.data) {
      if (!root.left) {
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      // Permitido nós iguais à direita
      if (!root.right) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  remove (data: any): Node {
    return this.removeNode(this._root, data)
  }

  removeNode (root: Node, data: any): Node {
    if (!this._root) {
      return null
    } else if (root.data < data) {
      root.left = this.removeNode(root.left, data)
    } else if (root.data > data) {
      this.insertNode(root.right, data)

    // Found it!
    } else {
      // Case 1:  No child
      if (root.left == null && root.right == null) {
        root = null

      // Case 2: One child
      } else if (root.left == null) {
        root = root.right
      } else if (root.right == null) {
        root = root.left

      // case 3: 2 children
      } else {
        const temp = this.findMin(root.right)
        root.data = temp.data
        this.insertNode(root.right, temp.data)
      }
    }

    return root
  }

  findMin (root: Node): Node {
    while (root.left) {
      root = root.left
    }

    return root
  }

  findMax (root: Node): Node {
    while (root.right) {
      root = root.right
    }

    return root
  }

  getNodeHeight (node: Node): number {
    if (!node) {
      return -1
    }

    return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
  }

  height () {
    return this.getNodeHeight(this._root)
  }

  breadthFirstSearch (key: string): boolean {
    const queue = new Queue()

    if (!this._root) {
      return
    }

    queue.add(this._root)

    while (queue.size()) {
      const node = queue.remove()

      if (node.key === key) {
        return true
      }

      if (node.left) {
        queue.add(node.left)
      }

      if (node.right) {
        queue.add(node.right)
      }
    }

    return false
  }

  depthFirstSearch (key: string, type: string): void {
    switch (type) {
      case 'inorder': this.dfsInorder(this._root, key); break
      case 'postorder': this.dfsPostorder(this._root, key); break
      case 'preorder':
      default:
        this.dfsPreorder(this._root, key); break
    }
  }

  dfsPreorder (node: Node, key: string) {
    if (!node) {
      return false
    }

    if (node.key === key) {
      return true
    }

    if (this.dfsPreorder(node.left, key)) {
      return true
    }

    return this.dfsPreorder(node.right, key)
  }

  dfsInorder (node: Node, key: string) {
    if (!node) {
      return false
    }

    if (this.dfsInorder(node.left, key)) {
      return true
    }

    if (node.key === key) {
      return true
    }

    return this.dfsInorder(node.right, key)
  }

  dfsPostorder (node: Node, key: string) {
    if (!node) {
      return false
    }

    if (this.dfsPostorder(node.left, key)) {
      return true
    }

    if (this.dfsPostorder(node.right, key)) {
      return true
    }

    if (node.key === key) {
      return true
    }
  }
}

class Node {
  key: string
  data: any
  left: Node
  right: Node

  constructor (data: any) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export default BinarySearchTree
