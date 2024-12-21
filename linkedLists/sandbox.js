"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doublyLinkedList_1 = require("./doublyLinkedList");
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
var dllStartNode = new doublyLinkedList_1.DoublyLinkListNode("A");
var dlList = new doublyLinkedList_1.DoublyLinkList(dllStartNode);
dlList.printList();
console.log("------");
dlList.insertFront({ value: "Z" });
dlList.insertEnd({ value: "B" });
