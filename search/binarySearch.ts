interface Array<T> {
    binarySearch(this: number[], toFind: number, start: number, end: number): number | null,
}

Array.prototype.binarySearch = function (toFind: number, start: number, end: number): number | null {
    if(start > end) { // this means we've surpased a single element array, DNF
        console.log(`DNF: ${toFind}`)
        return null
    }
    let middle = Math.floor(this.length / 2)
    if(this[middle] === toFind) {
        return middle
    }
    if(this[middle] > toFind) {
        // look left
        binarySearch()
    } else {
        // look right
    }

    return null
}

const nums = [2, 5, 8, 11, 20, 27, 36, 40]; // len: 8
const foundIdx1 = nums.binarySearch(8, 0, nums.length)
const foundIdx2 = nums.binarySearch(42, 0, nums.length)
const foundIdx3 = nums.binarySearch(20, 0, nums.length)

console.log(foundIdx1)
console.log(foundIdx2)
console.log(foundIdx3)
