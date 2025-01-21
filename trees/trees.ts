class TreeNode {
    value?: number
    children?: TreeNode[]

    constructor(value?: number, children?: TreeNode[]) {
        this.value = value ?? -1
        this.children = children ?? []
    }
}

class Tree {
    constructor(root: TreeNode) {

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
    constructor(root: BinaryTreeNode) {

    }

}

class BinarySearchTree extends BinaryTree{
    constructor(root: BinaryTreeNode) {
        super(root)
    }
}

export { TreeNode, Tree, BinaryTreeNode, BinaryTree, BinarySearchTree }