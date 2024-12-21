"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkListNode = exports.DoublyLinkList = void 0;
var DoublyLinkListNode = /** @class */ (function () {
    function DoublyLinkListNode(value, nextNode, prevNode) {
        this.value = value;
        this.nextNode = nextNode;
        this.prevNode = prevNode;
    }
    return DoublyLinkListNode;
}());
exports.DoublyLinkListNode = DoublyLinkListNode;
var DoublyLinkList = /** @class */ (function () {
    function DoublyLinkList(startingNode) {
        this.startingNode = startingNode;
    }
    DoublyLinkList.prototype.insertFront = function (nodeToAdd) {
        nodeToAdd.nextNode = this.startingNode;
        this.startingNode.prevNode = nodeToAdd;
        this.startingNode = nodeToAdd;
        this.printList();
    };
    DoublyLinkList.prototype.insertEnd = function (nodeToAdd) {
        var curr = this.startingNode;
        while (curr) {
            if (curr.nextNode) {
                curr = curr.nextNode;
            }
            else {
                curr.nextNode = nodeToAdd;
                nodeToAdd.prevNode = curr;
                break;
            }
        }
        this.printList();
    };
    DoublyLinkList.prototype.insertNodeBefore = function (nodeToAdd, before) {
    };
    DoublyLinkList.prototype.insertNodeAfter = function (nodeToAdd, after) {
    };
    DoublyLinkList.prototype.findNodeByValue = function (valueToFind) {
        return false;
    };
    DoublyLinkList.prototype.printList = function () {
        var curr = this.startingNode;
        while (curr) {
            if (curr.prevNode) {
                console.log("⬆️");
            }
            console.log(curr.value);
            if (curr.nextNode) {
                console.log("⬇️");
                curr = curr.nextNode;
            }
            else {
                break;
            }
        }
    };
    return DoublyLinkList;
}());
exports.DoublyLinkList = DoublyLinkList;
