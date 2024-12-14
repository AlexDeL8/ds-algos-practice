import { LinkedList, LinkedListNode } from "./linkedLists"

class DoublyLinkListNode extends LinkedListNode {
    prevNode?: LinkedListNode

    constructor(
        value?: string, 
        nextNode?: DoublyLinkListNode, 
        prevNode?: DoublyLinkListNode
    ) {
        super(value, nextNode)
        this.prevNode = prevNode
    }
}

class DoublyLinkList extends LinkedList {
    constructor(startingNode: DoublyLinkListNode) {
        super(startingNode)
    }
}
