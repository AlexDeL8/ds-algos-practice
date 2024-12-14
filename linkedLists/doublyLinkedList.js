"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linkedLists_1 = require("./linkedLists");
var DoublyLinkListNode = /** @class */ (function (_super) {
    __extends(DoublyLinkListNode, _super);
    function DoublyLinkListNode(value, nextNode, prevNode) {
        var _this = _super.call(this, value, nextNode) || this;
        _this.prevNode = prevNode;
        return _this;
    }
    return DoublyLinkListNode;
}(linkedLists_1.LinkedListNode));
var DoublyLinkList = /** @class */ (function (_super) {
    __extends(DoublyLinkList, _super);
    function DoublyLinkList(startingNode) {
        return _super.call(this, startingNode) || this;
    }
    return DoublyLinkList;
}(linkedLists_1.LinkedList));
