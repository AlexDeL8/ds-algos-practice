class TreeNode {
    value?: number
    children?: TreeNode[]

    constructor(value?: number, children?: TreeNode[]) {
        this.value = value ?? -1
        this.children = children ?? []
    }
}

class Tree {
    root: TreeNode
    constructor(root: TreeNode) {
        this.root = root
    }
}

class BinaryTreeNode {
    value?: number
    left?: BinaryTreeNode | null
    right?: BinaryTreeNode | null

    constructor(value?: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
        this.value = value ?? -1
        this.left = left ?? null
        this.right = right ?? null
    }
}

class BinaryTree {
    root: BinaryTreeNode | BinarySearchTreeNode
    curr: BinaryTreeNode | BinarySearchTreeNode
    constructor(root: BinaryTreeNode) {
        this.root = root
        this.curr = root
    }

    insert(): boolean {

    }

    search(): BinaryTreeNode {

    }
}

class BinarySearchTree extends BinaryTree {
    constructor(root: BinaryTreeNode) {
        super(root)
    }

    insert(): boolean {

    }

    search(): BinarySearchTreeNode {

    }
}

export { TreeNode, Tree, BinaryTreeNode, BinaryTree, BinarySearchTree }