class LinkedListNode {
    // TODO: Want to be able to make the value generic
    value?: string
    nextNode?: LinkedListNode

    constructor(value?: string, nextNode?: LinkedListNode) {
        this.value = value ?? "default"
        this.nextNode = nextNode ?? undefined
    }
}

class LinkedList {
    startingNode: LinkedListNode

    constructor(startingNode: LinkedListNode) {
        this.startingNode = startingNode
    }

    insertFront(nodeToAdd: LinkedListNode): void {
        if(!this.startingNode) {
            this.startingNode = nodeToAdd
        }
        nodeToAdd.nextNode = this.startingNode
        this.startingNode = nodeToAdd
        this.printList()
    }

    insertEnd(nodeToAdd: LinkedListNode): void {
        if(!this.startingNode) {
            this.startingNode = nodeToAdd
        }
        let currentNode = this.startingNode
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = nodeToAdd
        this.printList()
    }

    insertNodeBefore(nodeToAdd: LinkedListNode, beforeValue: string) {
        if(this.startingNode === beforeValue) {
            this.insertFront(nodeToAdd)
            return
        }
        
        let prev = this.startingNode
        let curr = this.startingNode.nextNode
        while(curr !== undefined) {
            if(curr.value === beforeValue) {
                nodeToAdd.nextNode = curr
                prev.nextNode = nodeToAdd
                this.printList()
                return
            }
            prev = curr
            curr = curr.nextNode
        }
        console.log("Node not found. No insertion.")
    }

    insertNodeAfter(nodeToAdd: LinkedListNode, afterValue: string) {
        let curr: LinkedListNode | undefined = this.startingNode
        while(curr !== undefined) {
            if(curr.value === afterValue) {
                nodeToAdd.nextNode = curr.nextNode
                curr.nextNode = nodeToAdd
                this.printList()
                return
            }
            curr = curr.nextNode
        }
        console.log("Node not found. No insertion.")
    }

    // Responsible for edit/update and remove
    findNodeByValue(valueToFind: string): boolean {
        let currentNode = this.startingNode
        while(currentNode) {
            if(currentNode.value === valueToFind) {
                return true
            }
            if(currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }
            else {
                break
            }
        }
        return false
    }

    printList(): void {
        let currentNode = this.startingNode
        console.log("Node List:")
        while(currentNode) {
            console.log(currentNode.value)
            if(currentNode.nextNode) {
                console.log("⬇️")
                currentNode = currentNode.nextNode
            } else {
                break;
            }
        }
    }
}

const startNode = new LinkedListNode("1")

const list = new LinkedList(startNode)
list.printList()
console.log("------")
list.insertEnd({value: "2"})
console.log("------")
list.insertFront({value: "0"})
list.insertNodeBefore({value: "3"}, "4")
list.insertNodeBefore({value: "3"}, "2")
list.insertNodeAfter({value: "A"}, "3")

export { LinkedListNode, LinkedList }