"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, nextNode) {
        this.value = value !== null && value !== void 0 ? value : "default";
        this.nextNode = nextNode !== null && nextNode !== void 0 ? nextNode : undefined;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(startingNode) {
        this.startingNode = startingNode;
    }
    LinkedList.prototype.insertFront = function (nodeToAdd) {
        if (!this.startingNode) {
            this.startingNode = nodeToAdd;
        }
        nodeToAdd.nextNode = this.startingNode;
        this.startingNode = nodeToAdd;
        this.printList();
    };
    LinkedList.prototype.insertEnd = function (nodeToAdd) {
        if (!this.startingNode) {
            this.startingNode = nodeToAdd;
        }
        var currentNode = this.startingNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = nodeToAdd;
        this.printList();
    };
    LinkedList.prototype.insertNodeBefore = function (nodeToAdd, beforeValue) {
        if (this.startingNode === beforeValue) {
            this.insertFront(nodeToAdd);
            return;
        }
        var prev = this.startingNode;
        var curr = this.startingNode.nextNode;
        while (curr !== undefined) {
            if (curr.value === beforeValue) {
                nodeToAdd.nextNode = curr;
                prev.nextNode = nodeToAdd;
                this.printList();
                return;
            }
            prev = curr;
            curr = curr.nextNode;
        }
        console.log("Node not found. No insertion.");
    };
    LinkedList.prototype.insertNodeAfter = function (nodeToAdd, afterValue) {
        var curr = this.startingNode;
        while (curr !== undefined) {
            if (curr.value === afterValue) {
                nodeToAdd.nextNode = curr.nextNode;
                curr.nextNode = nodeToAdd;
                this.printList();
                return;
            }
            curr = curr.nextNode;
        }
        console.log("Node not found. No insertion.");
    };
    // Responsible for edit/update and remove
    LinkedList.prototype.findNodeByValue = function (valueToFind) {
        var currentNode = this.startingNode;
        while (currentNode) {
            if (currentNode.value === valueToFind) {
                return true;
            }
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            else {
                break;
            }
        }
        return false;
    };
    LinkedList.prototype.printList = function () {
        var currentNode = this.startingNode;
        console.log("Node List:");
        while (currentNode) {
            console.log(currentNode.value);
            if (currentNode.nextNode) {
                console.log("⬇️");
                currentNode = currentNode.nextNode;
            }
            else {
                break;
            }
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
