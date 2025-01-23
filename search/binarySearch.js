Array.prototype.binarySearch = function (toFind, start, end) {
    debugger;
    if (start > end) { // this means we've surpased a single element array, DNF
        console.log("DNF: ".concat(toFind));
        return null;
    }
    var middle = Math.floor((start + end) / 2);
    if (this[middle] === toFind) {
        return middle;
    }
    if (this[middle] > toFind) {
        // look left
        return this.binarySearch(toFind, start, middle - 1);
    }
    else {
        // look right, this[middle] < toFind
        return this.binarySearch(toFind, middle + 1, end);
    }
};
var nums = [2, 5, 8, 11, 20, 27, 36, 40]; // len = 8, middle = 4
var foundIdx1 = nums.binarySearch(8, 0, nums.length); // 2
var foundIdx2 = nums.binarySearch(42, 0, nums.length); // null
var foundIdx3 = nums.binarySearch(20, 0, nums.length); // 4
console.log(foundIdx1);
console.log(foundIdx2);
console.log(foundIdx3);
