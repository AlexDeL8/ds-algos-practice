var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function closureLog(log) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setTimeout(function () { return console.log(log); }, 1000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
Array.prototype.bubbleSort = function () {
    return __awaiter(this, void 0, void 0, function () {
        var limit, left, right, swapped, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Starting bubble sort");
                    debugger;
                    limit = this.length - 1;
                    _a.label = 1;
                case 1:
                    if (!(limit > 0)) return [3 /*break*/, 7];
                    left = 0;
                    right = 1;
                    swapped = false;
                    _a.label = 2;
                case 2:
                    if (!(right <= limit)) return [3 /*break*/, 5];
                    if (!(this[right] < this[left])) return [3 /*break*/, 4];
                    temp = this[left];
                    this[left] = this[right];
                    this[right] = temp;
                    swapped = true;
                    return [4 /*yield*/, closureLog("".concat(this, " \n"))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    left++;
                    right++;
                    return [3 /*break*/, 2];
                case 5:
                    if (!swapped) {
                        console.log("Didn't perform any swaps, array is sorted");
                        return [3 /*break*/, 7];
                    }
                    _a.label = 6;
                case 6:
                    limit--;
                    return [3 /*break*/, 1];
                case 7:
                    console.log("SORTED: ".concat(this));
                    return [2 /*return*/];
            }
        });
    });
};
function mergeSort(nums) {
    debugger;
    if (nums.length < 2)
        return nums;
    var mid = Math.floor(nums.length / 2);
    var left = nums.slice(0, mid);
    var right = nums.slice(mid);
    function merge(left, right) {
        debugger;
        var result = [];
        var lLen = left.length;
        var rLen = right.length;
        var l = 0;
        var r = 0;
        while (l < lLen && r < rLen) {
            if (left[l] < right[r]) {
                result.push(left[l]);
                l++;
            }
            else {
                result.push(right[r]);
                r++;
            }
        }
        return result.concat(left.slice(l)).concat(right.slice(r));
    }
    return merge(mergeSort(left), mergeSort(right));
}
Array.prototype.quickSort = function () {
    console.log("Starting quick sort");
    debugger;
};
var randomArr1 = [48, 8, 299, 19, 65, 87, 20, 132];
randomArr1.bubbleSort();
var randomArr2 = [543, 700, 56, 90, 123, 24, 5, 999];
console.log("Starting merge sort");
var randomArr2Sorted = mergeSort(randomArr2);
console.log("SORTED: ".concat(randomArr2Sorted));
var randomArr3 = [774, 10, 45, 87, 436, 1, 8, 10];
randomArr3.quickSort();
