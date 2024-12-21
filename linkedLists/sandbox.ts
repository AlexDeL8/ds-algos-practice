import { LinkedListNode, LinkedList } from "./linkedLists"
import { DoublyLinkListNode, DoublyLinkList } from "./doublyLinkedList"

// const startNode = new LinkedListNode("1")

// const list = new LinkedList(startNode)
// list.printList()
// console.log("------")
// list.insertEnd({value: "2"})
// console.log("------")
// list.insertFront({value: "0"})
// list.insertNodeBefore({value: "3"}, "4")
// list.insertNodeBefore({value: "3"}, "2")
// list.insertNodeAfter({value: "A"}, "3")


const dllStartNode = new DoublyLinkListNode("A")

const dlList = new DoublyLinkList(dllStartNode)
dlList.printList()
console.log("------")
dlList.insertFront({value: "Z"})
dlList.insertEnd({value: "B"})