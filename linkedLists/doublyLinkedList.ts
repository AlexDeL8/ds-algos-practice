import { LinkedList, LinkedListNode } from "./linkedLists"

class DoublyLinkListNode {
    value?: string
    nextNode?: DoublyLinkListNode
    prevNode?: DoublyLinkListNode

    constructor(
        value?: string | "default", 
        nextNode?: DoublyLinkListNode | undefined, 
        prevNode?: DoublyLinkListNode | undefined
    ) {
        this.value = value
        this.nextNode = nextNode
        this.prevNode = prevNode
    }
}

class DoublyLinkList {
    startingNode: DoublyLinkListNode

    constructor(startingNode: DoublyLinkListNode) {
        this.startingNode = startingNode
    }

    insertFront(nodeToAdd: DoublyLinkListNode): void {
        nodeToAdd.nextNode = this.startingNode
        this.startingNode.prevNode = nodeToAdd
        this.startingNode = nodeToAdd
        this.printList()
    }

    insertEnd(nodeToAdd: DoublyLinkListNode): void {
        let curr = this.startingNode
        while(curr) {
            if(curr.nextNode) {
                curr = curr.nextNode
            } else {
                curr.nextNode = nodeToAdd
                nodeToAdd.prevNode = curr
                break;
            }
        }
        this.printList()
    }

    insertNodeBefore(nodeToAdd: DoublyLinkListNode, before: string): void {

    }

    insertNodeAfter(nodeToAdd: DoublyLinkListNode, after: string): void {

    }
    
    findNodeByValue(valueToFind: string): boolean {
        
        return false
    }

    printList(): void {
        let curr = this.startingNode
        while(curr) {
            if(curr.prevNode) {
                console.log("⬆️")
            }
            console.log(curr.value)
            if(curr.nextNode) {
                console.log("⬇️")
                curr = curr.nextNode
            } else {
                break;
            }
        }
    }


}

export { DoublyLinkList, DoublyLinkListNode }
